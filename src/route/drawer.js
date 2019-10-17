import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../views/navigation/drawer/HomeScree';
import NotificationsScreen from '../views/navigation/drawer/NotificationsScreen';

const DrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Notifications: NotificationsScreen,
});

export default DrawerNavigator;
