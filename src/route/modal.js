import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../views/navigation/HomeScreen';
import ProfileScreen from '../views/navigation/ProfileScreen';
import ModalScreen from '../views/navigation/ModalScreen';
import DatePickerBasics from '../views/base/datePicker';
import DetailScreen from '../views/navigation/DetailScreen';
import ApiScreen from '../views/api/maskViewIos';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    DatePicker: DatePickerBasics,
    Details: DetailScreen,
    Api: ApiScreen,
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

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal', // madal card
    headerMode: 'none',
  },
);

export default RootStack;
