import type { ViewProps as RNViewProps } from 'react-native';

interface ViewProps extends RNViewProps {
  row?: boolean;
  center?: boolean;
  testID?: string;
}

export { type ViewProps };
