import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './container.styles';
import type { ContainerProps, ContainerScreenProps } from './container.types';

const ContainerContent = ({
  children,
  style,
  scrollable = true,
}: ContainerScreenProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  if (!scrollable) {
    return <>{children}</>;
  }

  return (
    <ScrollView
      // TODO review docs about that
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.padding, style]}>
      {children}
    </ScrollView>
  );
};

const Container = ({
  children,
  style,
  scrollable = true,
}: ContainerProps): React.JSX.Element => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView
        style={[styles.root, !scrollable ? styles.padding : {}, style]}>
        <StatusBar barStyle={theme.colors.statusBar} />
        <ContainerContent
          scrollable={scrollable}
          style={style}
          children={children}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Container;
