import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles';
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

    const userHasSetTheme = false;

    UnistylesRegistry.addThemes({
      light: lightTheme,
      dark: darkTheme,
      ...themes,
    }).addConfig({ adaptiveThemes: !userHasSetTheme });

    this.initialized = true;
  }

  public setTheme(theme: keyof CombinedThemes<T>) {
    this.ensureInitialized();
    UnistylesRuntime.setTheme(theme as string);
    UnistylesRuntime.setRootViewBackgroundColor(
      (UnistylesRuntime.getTheme() as Theme).colors.rootViewBackgroundColor,
    );
  }

  public getCurrentThemeName(): keyof CombinedThemes<T> {
    this.ensureInitialized();
    return UnistylesRuntime.themeName as keyof CombinedThemes<T>;
  }
}

export default ThemeManager;