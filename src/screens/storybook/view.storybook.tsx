import React from 'react';
import { Container, View, Text } from '../../rntk/components';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const stylesheet = createStyleSheet({
  sizedContainer: {
    width: 250,
    height: 100,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 16,
  },
  fluidContainer: {
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 16,
  },
  box: {
    width: 50,
    height: 50,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
});

const ViewStoryBook = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Container scrollable={false}>
      <Text>Centered</Text>
      <View center style={styles.sizedContainer}>
        <View style={[styles.box, styles.red]} />
      </View>

      <Text>Column</Text>
      <View style={styles.fluidContainer}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.green]} />
      </View>

      <Text>Row</Text>
      <View row style={styles.sizedContainer}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.green]} />
      </View>
    </Container>
  );
};

export { ViewStoryBook };
