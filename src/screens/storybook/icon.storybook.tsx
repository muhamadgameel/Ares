import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icons } from '../../rntk/assets';
import { Container, Icon, Text, View } from '../../rntk/components';

export const stylesheet = createStyleSheet({
  container: {
    marginBottom: 16,
    flexWrap: 'wrap',
  },
});

const IconStoryBook = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Container scrollable={false}>
      <Text value="Sizes" />
      <View row center style={styles.container}>
        <Icon size="sm" source={Icons.interface.addCircle} />
        <Icon size="md" source={Icons.interface.addCircle} />
        <Icon size="lg" source={Icons.interface.addCircle} />
        <Icon size="xl" source={Icons.interface.addCircle} />
      </View>

      <Text value="Colors" />
      <View row center style={styles.container}>
        <Icon
          size="lg"
          source={Icons.interface.minusCircle}
          color={theme.colors.primaryText}
        />
        <Icon
          size="lg"
          source={Icons.interface.checkCircle}
          color={theme.colors.positiveText}
        />
        <Icon
          size="lg"
          source={Icons.interface.moreHorizontalCircle}
          color={theme.colors.warningText}
        />
        <Icon
          size="lg"
          source={Icons.interface.closeCircle}
          color={theme.colors.negativeText}
        />
        <Icon
          size="lg"
          source={Icons.interface.moreVerticalCircle}
          color={theme.colors.secondaryText}
        />
      </View>

      <Text value="Navigation Icons" />
      <View row center style={styles.container}>
        <Icon source={Icons.navigation.arrowUp} />
        <Icon source={Icons.navigation.arrowDown} />
        <Icon source={Icons.navigation.arrowLeft} />
        <Icon source={Icons.navigation.arrowRight} />
        <Icon source={Icons.navigation.arrowHeadUp} />
        <Icon source={Icons.navigation.arrowHeadDown} />
        <Icon source={Icons.navigation.arrowHeadLeft} />
        <Icon source={Icons.navigation.arrowHeadRight} />
        <Icon source={Icons.navigation.arrowSkipForward} />
        <Icon source={Icons.navigation.arrowSkipBackward} />
      </View>

      <Text value="Interface Icons" />
      <View row center style={styles.container}>
        <Icon source={Icons.interface.check} />
        <Icon source={Icons.interface.checkAll} />
        <Icon source={Icons.interface.checkCircle} />
        <Icon source={Icons.interface.close} />
        <Icon source={Icons.interface.closeCircle} />
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
    </Container>
  );
};

export { IconStoryBook };
