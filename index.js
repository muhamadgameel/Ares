import { AppRegistry } from 'react-native';
import App from './App';
import { CreateTODO } from './src/screens';
import { name as appName } from './app.json';
import { initTheme } from './src/styling/app-theming';

import {
  ViewStoryBook,
  TextStoryBook,
  IconStoryBook,
  ImageStoryBook,
  FormStoryBook,
} from './src/screens/storybook';

initTheme();

// AppRegistry.registerComponent(appName, () => ViewStoryBook);
// AppRegistry.registerComponent(appName, () => TextStoryBook);
// AppRegistry.registerComponent(appName, () => IconStoryBook);
// AppRegistry.registerComponent(appName, () => ImageStoryBook);
AppRegistry.registerComponent(appName, () => FormStoryBook);
// AppRegistry.registerComponent(appName, () => App);
