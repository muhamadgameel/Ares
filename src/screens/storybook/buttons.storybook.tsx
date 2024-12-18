import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppThemeManager } from '../../../src/styling/app-theming';
import { Icons } from '../../rntk/assets';
import { Button, Container, View } from '../../rntk/components';

export const stylesheet = createStyleSheet({
  button: {
    marginBottom: 16,
  },
  rowContainer: {
    gap: 12,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  flex: {
    flex: 1,
  },
});

const ButtonStoryBook = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Container>
      <Button
        style={styles.button}
        title={{ value: 'Click' }}
        leftIcon={{ source: Icons.interface.addCircle }}
      />
      <Button
        style={styles.button}
        variant="secondary"
        title={{ value: 'Click' }}
        rightIcon={{ source: Icons.interface.minusCircle }}
      />
      <Button
        style={styles.button}
        variant="danger"
        title={{ value: 'Click' }}
        leftIcon={{ source: Icons.interface.zoomIn }}
        rightIcon={{ source: Icons.interface.zoomIn }}
      />
      <Button
        disabled
        style={styles.button}
        variant="secondary"
        title={{ value: 'Click' }}
      />
      <View row center>
        <Button variant="inline" title={{ value: 'First Inline Button' }} />
        <Button variant="inline" title={{ value: 'Second Inline Button' }} />
      </View>
      <View row center>
        <Button
          disabled
          variant="inline"
          title={{ value: 'First Inline Button' }}
        />
        <Button
          disabled
          variant="inline"
          title={{ value: 'Second Inline Button' }}
        />
      </View>
      <View center row style={styles.rowContainer}>
        <Button
          title={{ value: 'Light Theme' }}
          variant="secondary"
          onPress={() => {
            AppThemeManager.setTheme('light');
          }}
          style={styles.flex}
        />
        <Button
          title={{ value: 'Dark Theme' }}
          onPress={() => {
            AppThemeManager.setTheme('dark');
          }}
          style={styles.flex}
          variant="primary"
        />
      </View>
    </Container>
  );
};

export { ButtonStoryBook };
