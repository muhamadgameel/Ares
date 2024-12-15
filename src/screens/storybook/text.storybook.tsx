import React from 'react';

import { Container, Text } from '../../rntk/components';

const TextStoryBook = () => {
  return (
    <Container scrollable={false}>
      <Text variant="h3" value="H3 Variant" />
      <Text variant="h2" value="H2 Variant" />
      <Text variant="h1" value="H1 Variant" />
      <Text variant="subhead" value="Subhead Variant" />
      <Text variant="body" value="Body Variant" />
      <Text variant="caption" value="Caption Variant" />
      <Text variant="footnote" value="Footnote Variant" />

      <Text align="left" variant="body" value="Left align text" />
      <Text align="center" variant="body" value="Center align text" />
      <Text align="right" variant="body" value="Right align text" />

      <Text fontWeight="bold" variant="h3" value="H3 Variant Bold" />
      <Text fontWeight="bold" variant="h2" value="H2 Variant Bold" />
      <Text fontWeight="bold" variant="h1" value="H1 Variant Bold" />
      <Text fontWeight="bold" variant="subhead" value="Subhead Variant Bold" />
      <Text fontWeight="bold" variant="body" value="Body Variant Bold" />
      <Text fontWeight="bold" variant="caption" value="Caption Variant Bold" />
      <Text
        fontWeight="bold"
        variant="footnote"
        value="Footnote Variant Bold"
      />
    </Container>
  );
};

export { TextStoryBook };
