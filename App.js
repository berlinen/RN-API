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

import RootStack from './src/route/modal';
import MainNavigator from './src/route/normal';
import TabNavigator from './src/route/tab';
import DrawerNavigator from './src/route/drawer';
import AuthNavigator from './src/route/auth';

const App = createAppContainer(AuthNavigator);

// const App = () => {
//   return (
//     <>
//       <ButtonBasics />
//     </>
//   );
// };

export default App;
