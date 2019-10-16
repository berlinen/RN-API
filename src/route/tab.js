import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../views/navigation/HomeScreen';
import ProfileScreen from '../views/navigation/ProfileScreen';
import DatePickerBasics from '../views/base/datePicker';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  DatePicker: DatePickerBasics,
});

export default TabNavigator;
