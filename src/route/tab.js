import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons'; // 6.2.2;
import HomeScreen from '../views/navigation/HomeScreen';
import ProfileScreen from '../views/navigation/ProfileScreen';
import DetailsScreen from '../views/navigation/DetailScreen';
import HomeIconWithBadge from '../views/navigation/HomeIconWithBadge';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Profile') {
    iconName = `ios-add-circle${focused ? '' : '-outline'}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default TabNavigator;
