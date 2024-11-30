import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './container.styles';
import type { ContainerProps } from './container.types';

const Container = ({ style, children }: ContainerProps): React.JSX.Element => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={[styles.root, style]}>
        <StatusBar barStyle={theme.colors.statusBar} />
        {children}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Container;
