import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles';
import ThemeManager from './theme-manager';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import { Theme } from './themes/themes.types';

describe('ThemeManager', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // @ts-ignore - accessing private property for testing
    ThemeManager.instance = null;
  });

  describe('Singleton Pattern', () => {
    it('should return same instance when getInstance is called multiple times', () => {
      const instance1 = ThemeManager.getInstance();
      const instance2 = ThemeManager.getInstance();
      expect(instance1).toBe(instance2);
    });

    it('should create new instance after reset', () => {
      const instance1 = ThemeManager.getInstance();
      // @ts-ignore - accessing private property for testing
      ThemeManager.instance = null;
      const instance2 = ThemeManager.getInstance();
      expect(instance1).not.toBe(instance2);
    });
  });

  describe('Initialization', () => {
    it('should throw error when methods are called before initialization', () => {
      const themeManager = ThemeManager.getInstance();
      const uninitializedMethods = [
        () => themeManager.setTheme('light'),
        () => themeManager.getCurrentThemeName(),
      ];

      uninitializedMethods.forEach(method => {
        expect(method).toThrow('ThemeManager has not been initialized');
      });
    });

    it('should warn and not reinitialize when init is called multiple times', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
      const themeManager = ThemeManager.getInstance();

      themeManager.init();
      themeManager.init();

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'ThemeManager has already been initialized',
      );
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      consoleWarnSpy.mockRestore();
    });

    it('should set initialized flag to true when init is called', () => {
      const themeManager = ThemeManager.getInstance();
      expect(themeManager['initialized']).toBe(false);

      themeManager.init();
      expect(themeManager['initialized']).toBe(true);
    });

    it('should properly initialize with default themes', () => {
      const addThemesMock = jest
        .spyOn(UnistylesRegistry, 'addThemes')
        .mockReturnThis();
      const addConfigMock = jest
        .spyOn(UnistylesRegistry, 'addConfig')
        .mockReturnThis();

      const themeManager = ThemeManager.getInstance();
      themeManager.init();

      expect(addThemesMock).toHaveBeenCalledWith({
        light: lightTheme,
        dark: darkTheme,
      });
      expect(addConfigMock).toHaveBeenCalledWith({ adaptiveThemes: true });

      addThemesMock.mockRestore();
      addConfigMock.mockRestore();
    });

    it('should correctly merge and initialize with additional themes', () => {
      const additionalThemes = {
        custom: {
          colors: { primary: '#123456', rootViewBackgroundColor: '#FFFFFF' },
          typography: {},
          spacing: {},
        } as Theme,
      };

      const addThemesMock = jest
        .spyOn(UnistylesRegistry, 'addThemes')
        .mockReturnThis();
      const themeManager = ThemeManager.getInstance<typeof additionalThemes>();
      themeManager.init(additionalThemes);

      expect(addThemesMock).toHaveBeenCalledWith({
        light: lightTheme,
        dark: darkTheme,
        ...additionalThemes,
      });

      addThemesMock.mockRestore();
    });
  });

  describe('Theme Management', () => {
    it('should properly set theme and update root background color', () => {
      const mockSetTheme = jest.spyOn(UnistylesRuntime, 'setTheme');
      const mockSetRootViewBackgroundColor = jest.spyOn(
        UnistylesRuntime,
        'setRootViewBackgroundColor',
      );

      const mockGetTheme = jest
        .spyOn(UnistylesRuntime, 'getTheme')
        .mockReturnValue({
          colors: { rootViewBackgroundColor: '#000000' },
          typography: {},
          spacing: {},
        } as ReturnType<typeof UnistylesRuntime.getTheme>);

      const themeManager = ThemeManager.getInstance();
      themeManager.init();
      themeManager.setTheme('dark');

      expect(mockSetTheme).toHaveBeenCalledWith('dark');
      expect(mockGetTheme).toHaveBeenCalled();
      expect(mockSetRootViewBackgroundColor).toHaveBeenCalledWith('#000000');

      [mockSetTheme, mockSetRootViewBackgroundColor, mockGetTheme].forEach(
        mock => mock.mockRestore(),
      );
    });

    it('should handle theme changes with custom themes', () => {
      const customThemes = {
        customTheme: {
          colors: { rootViewBackgroundColor: '#EFEFEF' },
          typography: {},
          spacing: {},
        } as Theme,
      };

      const mockSetTheme = jest.spyOn(UnistylesRuntime, 'setTheme');

      const themeManager = ThemeManager.getInstance<typeof customThemes>();
      themeManager.init(customThemes);
      themeManager.setTheme('customTheme');

      expect(mockSetTheme).toHaveBeenCalledWith('customTheme');
      mockSetTheme.mockRestore();
    });

    it('should correctly report current theme name', () => {
      const mockThemeName = 'custom';

      // Save original value
      const originalThemeName = UnistylesRuntime.themeName;

      // Replace the property temporarily
      Object.defineProperty(UnistylesRuntime, 'themeName', {
        configurable: true,
        get: () => mockThemeName,
      });

      jest.spyOn(UnistylesRegistry, 'addThemes').mockReturnThis();
      jest.spyOn(UnistylesRegistry, 'addConfig').mockReturnThis();

      const themeManager = ThemeManager.getInstance();
      themeManager.init();
      const currentTheme = themeManager.getCurrentThemeName();

      expect(currentTheme).toBe(mockThemeName);

      // Restore original value
      Object.defineProperty(UnistylesRuntime, 'themeName', {
        configurable: true,
        get: () => originalThemeName,
      });
    });

    it('should handle errors when setting invalid theme', () => {
      const mockSetTheme = jest
        .spyOn(UnistylesRuntime, 'setTheme')
        .mockImplementation(() => {
          throw new Error('Theme is not registered');
        });

      const themeManager = ThemeManager.getInstance();
      themeManager.init();

      expect(() => themeManager.setTheme('invalidTheme' as any)).toThrow(
        'Theme is not registered',
      );

      mockSetTheme.mockRestore();
    });
  });
});
