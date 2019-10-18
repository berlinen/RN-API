/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarLabel: 'Profile!',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="右侧按钮"
        color="#fff"
      />
    ),
  };
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>profile 页面</Text>
        <Text>{navigation.getParam('names')}</Text>
        <Button
          title="Details 页面"
          onPress={() => navigate('Details', {name: 'Profile-Detail'})}
        />
      </View>
    );
  }
}
