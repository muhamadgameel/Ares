import React from 'react';
import { render } from '@testing-library/react-native';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Container from './container.component';

jest.mock('react-native-unistyles', () => ({
  createStyleSheet: jest.fn().mockReturnValue({}),
  useStyles: jest.fn().mockReturnValue({
    styles: {
      safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },
      root: {
        flex: 1,
        backgroundColor: 'white',
      },
    },
    theme: {
      colors: {
        statusBar: 'dark-content',
      },
    },
  }),
}));

describe('Container', () => {
  it('renders children correctly', () => {
    const testMessage = 'Test Content';
    const { getByText } = render(
      <Container>
        <Text>{testMessage}</Text>
      </Container>,
    );

    expect(getByText(testMessage)).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyle = {
      backgroundColor: 'red',
      padding: 20,
    };

    const { UNSAFE_getByType } = render(
      <Container style={customStyle}>
        <Text>Content</Text>
      </Container>,
    );

    const gestureHandlerRoot = UNSAFE_getByType(GestureHandlerRootView);
    expect(gestureHandlerRoot.props.style).toContainEqual(customStyle);
  });

  it('renders SafeAreaView as the root component', () => {
    const { UNSAFE_getByType } = render(
      <Container>
        <Text>Content</Text>
      </Container>,
    );

    expect(UNSAFE_getByType(SafeAreaView)).toBeTruthy();
  });

  it('renders StatusBar with correct barStyle', () => {
    const { UNSAFE_getByType } = render(
      <Container>
        <Text>Content</Text>
      </Container>,
    );

    const statusBar = UNSAFE_getByType(StatusBar);
    expect(statusBar.props.barStyle).toBe('dark-content');
  });

  it('maintains proper component hierarchy', () => {
    const { UNSAFE_getByType } = render(
      <Container>
        <Text>Content</Text>
      </Container>,
    );

    expect(UNSAFE_getByType(SafeAreaView)).toBeTruthy();
    expect(UNSAFE_getByType(GestureHandlerRootView)).toBeTruthy();
    expect(UNSAFE_getByType(StatusBar)).toBeTruthy();
  });

  it('handles empty children', () => {
    const { UNSAFE_getByType } = render(<Container />);

    expect(UNSAFE_getByType(SafeAreaView)).toBeTruthy();
    expect(UNSAFE_getByType(GestureHandlerRootView)).toBeTruthy();
  });

  it('applies default styles from useStyles', () => {
    const { UNSAFE_getByType } = render(
      <Container>
        <Text>Content</Text>
      </Container>,
    );

    const safeAreaView = UNSAFE_getByType(SafeAreaView);
    const gestureHandlerRoot = UNSAFE_getByType(GestureHandlerRootView);

    expect(safeAreaView.props.style).toEqual({
      flex: 1,
      backgroundColor: 'white',
    });

    expect(gestureHandlerRoot.props.style).toContainEqual({
      flex: 1,
      backgroundColor: 'white',
    });
  });
});
