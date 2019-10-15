/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Touchables from './src/views/base/button';
import ScrollViewPage from './src/views/base/scrollView';
import FlatListBasics from './src/views/base/flatList';
import SectionListBasics from './src/views/base/sectionList';
import NetWorkingBasics from './src/views/base/networking';
import TextInputBasics from './src/views/base/textInput';
import ButtonBasics from './src/views/base/buttonBasics';
import PickerBasics from './src/views/base/picker';
import SliderBasics from './src/views/base/sliderBasic';
import SwitchBasics from './src/views/base/switch';
import DatePickerBasics from './src/views/base/datePicker';
import ProgressBasics from './src/views/base/progressBasics';
import SegmentedControlIOsBasics from './src/views/base/SegmentedControlIOS';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/views/navigation/HomeScreen';
import ProfileScreen from './src/views/navigation/ProfileScreen';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},,
// });

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    DatePicker: DatePickerBasics,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

// const App = () => {
//   return (
//     <>
//       <ButtonBasics />
//     </>
//   );
// };

export default App;
