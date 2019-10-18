import React from 'react';
import {AsyncStorage, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '欢迎来到首页',
  };

  render() {
    return (
      <View>
        <Button title="展示其他页面" onPress={this._showMoreApp} />
        <Button title="退出登陆" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
