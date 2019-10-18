import React from 'react';
import {AsyncStorage, View, Button} from 'react-native';

export default class SignScreen extends React.Component {
  static navigationOptions = {
    title: '登陆',
  };

  render() {
    return (
      <View>
        <Button title="登陆" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
