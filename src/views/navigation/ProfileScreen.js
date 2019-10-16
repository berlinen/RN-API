import React from 'react';
import {View, Text, Button} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
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
