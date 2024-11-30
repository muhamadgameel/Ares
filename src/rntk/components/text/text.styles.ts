import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
  root: {
    color: theme.colors.primaryText,
    variants: {
      variant: {
        h3: {
          fontSize: theme.typography.h3,
        },
        h2: {
          fontSize: theme.typography.h2,
        },
        h1: {
          fontSize: theme.typography.h1,
        },
        subhead: {
          fontSize: theme.typography.subhead,
        },
        body: {
          fontSize: theme.typography.body,
        },
        caption: {
          fontSize: theme.typography.caption,
        },
        footnote: {
          fontSize: theme.typography.footnote,
        },
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
