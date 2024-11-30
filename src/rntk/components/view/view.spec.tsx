import React from 'react';
import { render } from '@testing-library/react-native';
import View from './view.component';

// Mock the unistyles hook
jest.mock('react-native-unistyles', () => ({
  createStyleSheet: jest.fn().mockReturnValue({}),
  useStyles: jest.fn().mockImplementation((stylesheet, props) => ({
    styles: {
      root: {
        ...(props.row && { flexDirection: 'row' }),
        ...(props.center && {
          justifyContent: 'center',
          alignItems: 'center',
        }),
      },
    },
  })),
}));

describe('View Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<View testID="test-view" />);

    const viewElement = getByTestId('test-view');
    expect(viewElement).toBeTruthy();
  });

  it('applies row style when row prop is true', () => {
    const { getByTestId } = render(<View testID="test-view" row />);

    const viewElement = getByTestId('test-view');
    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          flexDirection: 'row',
        }),
      ]),
    );
  });

  it('applies center styles when center prop is true', () => {
    const { getByTestId } = render(<View testID="test-view" center />);

    const viewElement = getByTestId('test-view');
    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          justifyContent: 'center',
          alignItems: 'center',
        }),
      ]),
    );
  });

  it('combines row and center styles when both props are true', () => {
    const { getByTestId } = render(<View testID="test-view" row center />);

    const viewElement = getByTestId('test-view');
    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }),
      ]),
    );
  });

  it('applies custom style prop correctly', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <View testID="test-view" style={customStyle} />,
    );

    const viewElement = getByTestId('test-view');
    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });

  it('passes through additional props', () => {
    const { getByTestId } = render(
      <View testID="test-view" accessibilityLabel="test label" />,
    );

    const viewElement = getByTestId('test-view');
    expect(viewElement.props.accessibilityLabel).toBe('test label');
  });
});
