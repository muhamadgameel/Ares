import React from 'react';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { AppThemeManager } from './src/styling/app-theming';
import {
  View,
  Text,
  Icon,
  Container,
  Button,
  Image,
} from './src/rntk/components';
import { Icons } from './src/rntk/assets';
import { ScrollView } from 'react-native';

const stylesheet = createStyleSheet(theme => ({
  container: {},
  box: {
    backgroundColor: theme.colors.secondary,
    padding: 36,
    marginBottom: 16,
  },
  spacing: {
    marginBottom: 16,
  },
  img: {
    width: 100,
    height: 100,
  },
  flex: {
    flex: 1,
  },
  rowContainer: {
    gap: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
}));

function App(): React.JSX.Element {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Container style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <View center style={styles.spacing}>
            <View row style={styles.rowContainer}>
              <Image
                style={styles.img}
                source={require('./src/assets/box.png')}
              />
              <Image
                style={styles.img}
                source={require('./src/assets/nature.jpg')}
              />

              <Image
                style={styles.img}
                source={{
                  uri: 'https://imgcdn.stablediffusionweb.com/2024/5/27/19354d72-a8dd-4b01-bbb2-e82024a9dddb.jpg',
                }}
              />
            </View>

            <Text variant="h3">This is some text</Text>
            <Text variant="h2" value="This is some text" />
            <Text variant="h1" value="This is some text" />
            <Text variant="subhead" value="This is some text" />
            <Text variant="body" value="This is some text" />
            <Text variant="caption" value="This is some text" />
            <Text variant="footnote" value="This is some text" />
            <View style={{ alignSelf: 'stretch' }}>
              <Text
                align="left"
                fontWeight="bold"
                variant="body"
                value="This is some text"
              />
              <Text
                align="center"
                fontWeight="bold"
                variant="body"
                value="This is some text"
              />
              <Text
                align="right"
                fontWeight="bold"
                variant="body"
                value="This is some text"
              />
            </View>
          </View>
          <View row center>
            <Icon source={Icons.navigation.arrowHeadUp} />
            <Icon source={Icons.navigation.arrowHeadDown} />
            <Icon source={Icons.navigation.arrowHeadLeft} />
            <Icon source={Icons.navigation.arrowHeadRight} />
          </View>

          <View row center>
            <Icon source={Icons.navigation.arrowUp} />
            <Icon source={Icons.navigation.arrowDown} />
            <Icon source={Icons.navigation.arrowLeft} />
            <Icon source={Icons.navigation.arrowRight} />
          </View>

          <View row center>
            <Icon source={Icons.navigation.arrowSkipForward} />
            <Icon source={Icons.navigation.arrowSkipBackward} />
          </View>

          <View row center>
            <Icon size="sm" source={Icons.navigation.arrowSkipForward} />
            <Icon size="md" source={Icons.navigation.arrowSkipForward} />
            <Icon size="lg" source={Icons.navigation.arrowSkipForward} />
            <Icon size="xl" source={Icons.navigation.arrowSkipForward} />
          </View>

          <View row center>
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
          <View row center>
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
      </ScrollView>
    </Container>
  );
}

export default App;
