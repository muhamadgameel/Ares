import React from 'react';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { AppThemeManager } from './src/styling/app-theming';
import { Container, Button, View } from './src/rntk/components';
import { Icons } from './src/rntk/assets';

const stylesheet = createStyleSheet({
  flex: {
    flex: 1,
  },
  rowContainer: {
    gap: 12,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
});

function App(): React.JSX.Element {
  const { styles } = useStyles(stylesheet);

  return (
    <Container>
      <View center row style={styles.rowContainer}>
        <Button
          leftIcon={{ source: Icons.interface.addCircle }}
          rightIcon={{ source: Icons.interface.minusCircle }}
          title={{ value: 'Light Theme' }}
          onPress={() => {
            AppThemeManager.setTheme('light');
          }}
          style={styles.flex}
        />
        <Button
          leftIcon={{ source: Icons.interface.moreHorizontalCircle }}
          title={{ value: 'Dark Theme' }}
          onPress={() => {
            AppThemeManager.setTheme('dark');
          }}
          style={styles.flex}
          variant="secondary"
        />
      </View>
    </Container>
  );
}

export default App;
