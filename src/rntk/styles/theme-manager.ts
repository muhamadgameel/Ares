import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles';
import type { UnistylesConfig } from 'react-native-unistyles/lib/typescript/src/types';
import { storage } from '../stores/storage';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { Theme } from './themes/themes.types';

type BaseThemes = {
  light: Theme;
  dark: Theme;
};

// Define a generic type for additional themes
type AdditionalThemes = Record<string, Theme>;

// Combine base themes with additional themes
type CombinedThemes<T extends AdditionalThemes> = BaseThemes & T;

// Override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends CombinedThemes<AdditionalThemes> {}
}

export class ThemeManager<T extends AdditionalThemes> {
  private static instance: ThemeManager<any> | null = null;
  private initialized: boolean = false;

  private constructor() {}

  public static getInstance<T extends AdditionalThemes>(): ThemeManager<T> {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager<T>();
    }
    return ThemeManager.instance as ThemeManager<T>;
  }

  private ensureInitialized(): void {
    if (!this.initialized) {
      throw new Error('ThemeManager has not been initialized');
    }
  }

  public init(themes = {} as T): void {
    if (this.initialized) {
      console.warn('ThemeManager has already been initialized');
      return;
    }

    const savedThemeFromStorage = storage.getString('savedThemeName');
    const config: UnistylesConfig = {};

    if (savedThemeFromStorage) {
      config.adaptiveThemes = false;
      config.initialTheme = savedThemeFromStorage;
    } else {
      config.adaptiveThemes = true;
    }

    UnistylesRegistry.addThemes({
      light: lightTheme,
      dark: darkTheme,
      ...themes,
    }).addConfig(config);

    this.initialized = true;
  }

  public setTheme(theme: keyof CombinedThemes<T>) {
    this.ensureInitialized();
    UnistylesRuntime.setTheme(theme as string);
    UnistylesRuntime.setRootViewBackgroundColor(
      (UnistylesRuntime.getTheme() as Theme).colors.rootViewBackgroundColor,
    );
    UnistylesRuntime.setAdaptiveThemes(false);
    storage.set('savedThemeName', theme as string);
  }

  public getCurrentThemeName(): keyof CombinedThemes<T> {
    this.ensureInitialized();
    return UnistylesRuntime.themeName as keyof CombinedThemes<T>;
  }
}

export default ThemeManager;
