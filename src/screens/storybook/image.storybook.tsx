import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Container, Image, Text, View } from '../../rntk/components';

export const stylesheet = createStyleSheet({
  img: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

const ImageStoryBook = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Container>
      <Text>Static Images</Text>
      <View row>
        <Image style={styles.img} source={require('../../assets/box.png')} />
        <Image style={styles.img} source={require('../../assets/nature.jpg')} />
      </View>

      <Text>Web URI Images</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://imgcdn.stablediffusionweb.com/2024/5/27/19354d72-a8dd-4b01-bbb2-e82024a9dddb.jpg',
        }}
      />

      <Text>Resize Modes Contain</Text>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../../assets/nature.jpg')}
      />

      <Text>Resize Modes Cover</Text>
      <Image
        resizeMode="cover"
        style={styles.img}
        source={require('../../assets/nature.jpg')}
      />

      <Text>Resize Modes Stretch</Text>
      <Image
        resizeMode="stretch"
        style={styles.img}
        source={require('../../assets/nature.jpg')}
      />
    </Container>
  );
};

export { ImageStoryBook };
