import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../views/navigation/HomeScreen';
import ProfileScreen from '../views/navigation/ProfileScreen';
import DetailScreen from '../views/advanced/touchFeedBack';
import DatePickerBasics from '../views/base/datePicker';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    DatePicker: DatePickerBasics,
    Details: DetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
);

export default MainNavigator;
