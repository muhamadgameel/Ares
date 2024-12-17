import React, { useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Container, Form, Text } from '../../rntk/components';
import { z } from 'zod';

export const stylesheet = createStyleSheet({
  text: {
    marginTop: 24,
  },
});

const FormStoryBook = () => {
  const { styles } = useStyles(stylesheet);
  const [result, setResult] = useState({});

  const schema = z.object({
    name: z.string().nonempty().min(10, { message: 'Min is 10' }),
    author: z.string().nonempty(),
    categories: z.string().array().nonempty(),
    termsAgree: z.boolean(),
  });

  return (
    <Container>
      <Form
        initialValues={{
          author: 'Muhamad Gameel',
          categories: ['movies'],
        }}
        validation={schema}
        onSubmit={values => {
          setResult(values);
        }}
        fields={
          [
            {
              type: 'TextInput',
              name: 'name',
              placeholder: 'Add Task Name...',
            },
            {
              type: 'TextInput',
              name: 'author',
              placeholder: 'Author Name...',
            },
            {
              type: 'CheckBoxGroup',
              name: 'categories',
              data: [
                { text: { value: 'Games' }, value: 'games' },
                { text: { value: 'Movies' }, value: 'movies' },
                { text: { value: 'Books' }, value: 'books' },
              ],
            },
            {
              type: 'TextArea',
              name: 'description',
              placeholder: 'Add Description...',
            },
            {
              type: 'CheckBox',
              name: 'termsAgree',
              text: { value: 'Agree on Terms & Conditions' },
            },
          ] as const
        }
      />
      <Text align="center" style={styles.text}>
        {JSON.stringify(result)}
      </Text>
    </Container>
  );
};

export { FormStoryBook };
