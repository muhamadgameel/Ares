import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  root: {
    color: theme.colors.primaryText,
    variants: {
      variant: {
        h3: theme.typography.h3,
        h2: theme.typography.h2,
        h1: theme.typography.h1,
        subhead: theme.typography.subhead,
        body: theme.typography.body,
        caption: theme.typography.caption,
        footnote: theme.typography.footnote,
      },
      align: {
        left: {
          textAlign: 'left',
        },
        center: {
          textAlign: 'center',
        },
        right: {
          textAlign: 'right',
        },
        justify: {
          textAlign: 'justify',
        },
      },
      fontWeight: {
        bold: {
          fontWeight: 'bold',
        },
        regular: {
          fontWeight: 'regular',
        },
      },
    },
  },
}));
