import React from 'react';
import {View, Text} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>profile 页面</Text>
        <Text>{navigation.getParam('names')}</Text>
      </View>
    );
  }
}
