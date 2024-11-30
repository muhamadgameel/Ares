import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import Icon from './icon.component';

jest.mock('react-native-unistyles', () => ({
  createStyleSheet: jest.fn().mockReturnValue({}),
  useStyles: jest.fn().mockReturnValue({
    styles: {
      root: {
        width: 24,
        height: 24,
      },
    },
    theme: {
      colors: {
        primaryText: '#000000',
      },
    },
  }),
}));

// Mock SVG component
const MockSvgComponent = ({ width, height, fill }: any) => (
  <View testID="mock-svg" style={{ width, height, fill }} />
);

describe('Icon Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Icon source={MockSvgComponent} />);
    const svgElement = getByTestId('mock-svg');

    expect(svgElement.props.style.width).toBe('100%');
    expect(svgElement.props.style.height).toBe('100%');
    expect(svgElement.props.style.fill).toBe('#000000');
  });

  it('should render with default medium size when no size prop provided', () => {
    const { getByTestId } = render(
      <Icon source={MockSvgComponent} testID="icon" />,
    );
    const iconElement = getByTestId('icon');

    expect(iconElement).toBeTruthy();
    expect(require('react-native-unistyles').useStyles).toHaveBeenCalledWith(
      expect.any(Object),
      { size: 'md' },
    );
  });

  ['sm', 'md', 'lg', 'xl'].forEach(size => {
    it(`applies correct styles for ${size} size`, () => {
      render(<Icon source={MockSvgComponent} size={size as any} />);

      expect(require('react-native-unistyles').useStyles).toHaveBeenCalledWith(
        expect.any(Object),
        { size },
      );
    });
  });

  it('should use default theme color primaryText', () => {
    const { getByTestId } = render(<Icon source={MockSvgComponent} />);
    const svgElement = getByTestId('mock-svg');

    expect(svgElement.props.style.fill).toBe('#000000');
  });

  it('applies custom color when provided', () => {
    const customColor = '#FF0000';
    const { getByTestId } = render(
      <Icon source={MockSvgComponent} color={customColor} />,
    );
    const svgElement = getByTestId('mock-svg');

    expect(svgElement.props.style.fill).toBe(customColor);
  });

  it('applies additional style when provided', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <Icon source={MockSvgComponent} style={customStyle} testID="icon-root" />,
    );

    const rootElement = getByTestId('icon-root');
    expect(rootElement.props.style).toEqual([
      { width: 24, height: 24 },
      customStyle,
    ]);
  });
});
