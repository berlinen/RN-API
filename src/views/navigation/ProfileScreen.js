/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, Arert} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerRight: (
      <Button
        onPress={() => Arert.alert('This is a button!')}
        title="Info"
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
        <Button title="Details 页面" onPress={() => navigate('Details')} />
      </View>
    );
  }
}
