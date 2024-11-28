import React from 'react';
import { Text, View, Button } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { AppThemeManager } from './src/styling/app-theming';

const stylesheet = createStyleSheet(theme => ({
  container: {
    borderColor: 'red',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    backgroundColor: theme.colors.secondary,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.primaryText,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function App(): React.JSX.Element {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>This is some text</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Light Theme"
          onPress={() => {
            console.log('light');
            AppThemeManager.setTheme('light');
          }}
        />
        <Button
          title="Dark Theme"
          onPress={() => {
            console.log('dark');
            AppThemeManager.setTheme('dark');
          }}
        />
        <Button
          title="Custom Theme"
          onPress={() => {
            console.log('custom');
            AppThemeManager.setTheme('custom');
          }}
        />
      </View>
    </View>
  );
}

export default App;
