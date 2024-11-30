import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './text.component';
import { useStyles } from 'react-native-unistyles';

// Mock the unistyles hook
jest.mock('react-native-unistyles', () => ({
  createStyleSheet: jest.fn().mockReturnValue({}),
  useStyles: jest.fn().mockImplementation((_, __) => ({
    styles: { root: {} },
  })),
}));

describe('Text Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders value prop correctly', () => {
    const { getByText } = render(<Text value="Hello World" />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('prefers children over value prop', () => {
    const { getByText, queryByText } = render(
      <Text value="Value Text">Children Text</Text>,
    );
    expect(getByText('Children Text')).toBeTruthy();
    expect(queryByText('Value Text')).toBeNull();
  });

  it('applies correct styles based on variant prop', () => {
    render(<Text variant="h1">Test Text</Text>);
    expect(useStyles).toHaveBeenCalledWith(expect.any(Object), {
      align: 'left',
      variant: 'h1',
      fontWeight: 'regular',
    });
  });

  it('applies correct styles based on align prop', () => {
    render(<Text align="center">Test Text</Text>);
    expect(useStyles).toHaveBeenCalledWith(expect.any(Object), {
      align: 'center',
      variant: 'body',
      fontWeight: 'regular',
    });
  });

  it('applies correct styles based on fontWeight prop', () => {
    render(<Text fontWeight="bold">Test Text</Text>);
    expect(useStyles).toHaveBeenCalledWith(expect.any(Object), {
      align: 'left',
      variant: 'body',
      fontWeight: 'bold',
    });
  });

  it('applies custom styles through style prop', () => {
    const customStyle = { color: 'red' };
    const { getByTestId } = render(
      <Text testID="custom-text" style={customStyle}>
        Test Text
      </Text>,
    );

    const textElement = getByTestId('custom-text');
    expect(textElement.props.style).toEqual([expect.any(Object), customStyle]);
  });

  it('passes through additional props to RNText', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Text testID="pressable-text" onPress={onPress}>
        Pressable Text
      </Text>,
    );

    const textElement = getByTestId('pressable-text');
    expect(textElement.props.onPress).toBe(onPress);
  });

  it('uses default props when none are provided', () => {
    render(<Text>Default Text</Text>);
    expect(useStyles).toHaveBeenCalledWith(expect.any(Object), {
      align: 'left',
      variant: 'body',
      fontWeight: 'regular',
    });
  });
});
