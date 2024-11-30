import React from 'react';
import { Text, View, Button } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { AppThemeManager } from './src/styling/app-theming';
import { Icon } from './src/rntk/components';
import { Icons } from './src/rntk/assets';

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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },
  text: {
    color: theme.colors.primaryText,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
}));

function App(): React.JSX.Element {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>This is some text</Text>
        <View style={styles.row}>
          <Icon source={Icons.navigation.arrowHeadUp} />
          <Icon source={Icons.navigation.arrowHeadDown} />
          <Icon source={Icons.navigation.arrowHeadLeft} />
          <Icon source={Icons.navigation.arrowHeadRight} />
        </View>

        <View style={styles.row}>
          <Icon source={Icons.navigation.arrowUp} />
          <Icon source={Icons.navigation.arrowDown} />
          <Icon source={Icons.navigation.arrowLeft} />
          <Icon source={Icons.navigation.arrowRight} />
        </View>

        <View style={styles.row}>
          <Icon source={Icons.navigation.arrowSkipForward} />
          <Icon source={Icons.navigation.arrowSkipBackward} />
        </View>

        <View style={styles.row}>
          <Icon size="sm" source={Icons.navigation.arrowSkipForward} />
          <Icon size="md" source={Icons.navigation.arrowSkipForward} />
          <Icon size="lg" source={Icons.navigation.arrowSkipForward} />
          <Icon size="xl" source={Icons.navigation.arrowSkipForward} />
        </View>

        <View style={styles.row}>
          <Icon size="lg" source={Icons.interface.check} />
          <Icon size="lg" source={Icons.interface.checkAll} />
          <Icon
            size="lg"
            source={Icons.interface.checkCircle}
            color={theme.colors.positiveText}
          />
          <Icon size="lg" source={Icons.interface.close} />
          <Icon
            size="lg"
            source={Icons.interface.closeCircle}
            color={theme.colors.negativeText}
          />
        </View>
        <View style={styles.row}>
          <Icon source={Icons.interface.minus} />
          <Icon source={Icons.interface.minusCircle} />
          <Icon source={Icons.interface.add} />
          <Icon source={Icons.interface.addCircle} />
          <Icon source={Icons.interface.moreHorizontal} />
          <Icon source={Icons.interface.moreHorizontalCircle} />
          <Icon source={Icons.interface.moreVertical} />
          <Icon source={Icons.interface.moreVerticalCircle} />
          <Icon source={Icons.interface.zoomIn} />
          <Icon source={Icons.interface.zoomOut} />
        </View>
      </View>
      <View style={styles.row}>
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
