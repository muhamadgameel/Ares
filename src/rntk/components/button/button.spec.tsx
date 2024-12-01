import React from 'react';
import { View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './button.component';

const primaryBG = '#007AFF';
const primaryText = '#FFFFFF';
const secondaryBG = 'transparent';
const secondaryText = '#007AFF';
const dangerBG = '#FF3B30';
const dangerText = '#FFFFFF';
const inlineBG = 'transparent';
const inlineText = '#007AFF';

jest.mock('react-native-unistyles', () => ({
  createStyleSheet: jest.fn().mockReturnValue({}),
  useStyles: jest.fn().mockImplementation((_, props) => ({
    styles: {
      root: {
        opacity: 1,
        ...(props.variant === 'primary' && { backgroundColor: primaryBG }),
        ...(props.variant === 'secondary' && { backgroundColor: secondaryBG }),
        ...(props.variant === 'danger' && { backgroundColor: dangerBG }),
        ...(props.variant === 'inline' && { backgroundColor: inlineBG }),
      },
      content: {},
      text: {
        fontWeight: 'bold',
        textAlign: 'center',
        ...(props.variant === 'primary' && { color: primaryText }),
        ...(props.variant === 'secondary' && { color: secondaryText }),
        ...(props.variant === 'danger' && { color: dangerText }),
        ...(props.variant === 'inline' && { color: inlineText }),
      },
    },
    theme: { colors: {}, spacing: {} },
  })),
}));

describe('Button', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('should render text with title.value prop', () => {
    const titleText = 'Click me';
    const { getByText } = render(<Button title={{ value: titleText }} />);

    const textElement = getByText(titleText);
    expect(textElement).toBeTruthy();
  });

  it('should render text with title.children prop', () => {
    const titleText = 'Click me';
    const { getByText } = render(<Button title={{ children: titleText }} />);

    const textElement = getByText(titleText);
    expect(textElement).toBeTruthy();
  });

  it('should display title text with bold font weight', () => {
    const titleText = 'Bold Text';
    const { getByText } = render(<Button title={{ children: titleText }} />);

    const textElement = getByText(titleText);
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ fontWeight: 'bold' })]),
    );
  });

  it('should center text content within button container', () => {
    const titleText = 'Centered Text';
    const { getByText } = render(
      <Button
        title={{
          children: titleText,
        }}
      />,
    );

    const textElement = getByText(titleText);
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textAlign: 'center' }),
      ]),
    );
  });

  it('calls onPress handler when pressed', () => {
    const { getByRole } = render(
      <Button title={{ value: 'Clickable Button' }} onPress={mockOnPress} />,
    );

    const button = getByRole('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', () => {
    const { getByRole } = render(
      <Button
        title={{ value: 'Disabled Button' }}
        onPress={mockOnPress}
        disabled
      />,
    );

    const button = getByRole('button');
    fireEvent.press(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  // Button applies custom styles when style prop is provided
  it('should apply custom styles when style prop is provided', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Button
        title={{ children: 'Test Button' }}
        style={customStyle}
        testID="custom-style-button"
      />,
    );

    const buttonElement = getByTestId('custom-style-button');
    expect(buttonElement.props.style).toMatchObject(customStyle);
  });

  // Test all variants
  describe('variants', () => {
    const variants = [
      ['primary', primaryBG, primaryText],
      ['secondary', secondaryBG, secondaryText],
      ['danger', dangerBG, dangerText],
      ['inline', inlineBG, inlineText],
    ] as const;

    variants.forEach(([variant, bg, textColor]) => {
      it(`renders ${variant} variant correctly`, () => {
        const { getByText, getByTestId } = render(
          <Button
            variant={variant}
            title={{ value: `${variant} Button` }}
            onPress={mockOnPress}
            testID="button"
          />,
        );
        const buttonElement = getByTestId('button');
        const textElement = getByText(`${variant} Button`);

        expect(buttonElement.props.style).toEqual(
          expect.objectContaining({ backgroundColor: bg }),
        );
        expect(textElement.props.style).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ color: textColor }),
          ]),
        );
      });
    });
  });

  // Test icons
  describe('icons', () => {
    // Mock SVG component
    const MockSvgComponent = ({ width, height, fill }: any) => (
      <View testID="mock-svg" style={{ width, height, fill }} />
    );

    it('should display left icon', () => {
      const { getByTestId } = render(
        <Button
          title={{ value: 'Click Me' }}
          leftIcon={{ source: MockSvgComponent, testID: 'icon-arrow-left' }}
        />,
      );

      const iconElement = getByTestId('icon-arrow-left');
      expect(iconElement).toBeTruthy();
    });

    it('should display right icon', () => {
      const { getByTestId } = render(
        <Button
          title={{ value: 'Click Me' }}
          rightIcon={{ source: MockSvgComponent, testID: 'icon-arrow-right' }}
        />,
      );

      const iconElement = getByTestId('icon-arrow-right');
      expect(iconElement).toBeTruthy();
    });

    it('should display both right and left icon', () => {
      const { getByTestId } = render(
        <Button
          title={{ value: 'Click Me' }}
          rightIcon={{ source: MockSvgComponent, testID: 'icon-arrow-right' }}
          leftIcon={{ source: MockSvgComponent, testID: 'icon-arrow-left' }}
        />,
      );

      const rightIconElement = getByTestId('icon-arrow-right');
      const leftIconElement = getByTestId('icon-arrow-left');

      expect(rightIconElement).toBeTruthy();
      expect(leftIconElement).toBeTruthy();
    });
  });

  // Test hitSlop calculations
  describe('hitSlop', () => {
    it('has correct hitSlop for inline variant', () => {
      const { getByTestId } = render(
        <Button
          variant="inline"
          title={{ children: 'Inline Button' }}
          onPress={mockOnPress}
          testID="button"
        />,
      );
      const button = getByTestId('button');
      expect(button.props.hitSlop).toMatchObject({
        bottom: 8,
        left: 8,
        right: 8,
        top: 8,
      });
    });

    it('has correct hitSlop for non-inline variant', () => {
      const { getByTestId } = render(
        <Button
          variant="primary"
          title={{ children: 'Primary Button' }}
          onPress={mockOnPress}
          testID="button"
        />,
      );
      const button = getByTestId('button');
      expect(button.props.hitSlop).toMatchObject({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      });
    });
  });

  // Test icon colors mapping
  describe('iconColorsMapping', () => {
    it('returns correct colors for each variant', () => {
      const { iconColorsMapping } = require('./button.styles');
      const mockColors = {
        primary: '#007AFF',
        supportText: '#FFFFFF',
        negative: '#FF3B30',
        negativeText: '#FFFFFF',
        disabled: '#E5E5EA',
        disabledText: '#C7C7CC',
        transparent: 'transparent',
      };

      expect(iconColorsMapping(mockColors, 'primary')).toBe(
        mockColors.supportText,
      );
      expect(iconColorsMapping(mockColors, 'secondary')).toBe(
        mockColors.primary,
      );
      expect(iconColorsMapping(mockColors, 'danger')).toBe(
        mockColors.negativeText,
      );
      expect(iconColorsMapping(mockColors, 'inline')).toBe(mockColors.primary);
      expect(iconColorsMapping(mockColors, 'disabled')).toBe(
        mockColors.disabledText,
      );
    });
  });
});
