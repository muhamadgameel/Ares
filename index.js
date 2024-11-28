import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { initTheme } from './src/styling/app-theming';

initTheme();

AppRegistry.registerComponent(appName, () => App);
