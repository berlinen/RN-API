import React from 'react';
import {AsyncStorage, View, Button} from 'react-native';

export default class SignScreen extends React.Component {
  static navigationOptions = {
    title: 'please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
