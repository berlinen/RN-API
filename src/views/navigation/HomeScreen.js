/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Button, View, TouchableOpacity, Text, Alret} from 'react-native';

export default class Screen extends React.Component {
  componentDidMount() {
    // 隐藏启动页，如果不设置消失时间，在组件加载完启动页自动隐藏
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }

  static navigationOptions = ({navigation}) => {
    // const params = navigation.state.params || {};
    return {
      title: 'Home',
      tabBarLabel: 'Home!',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="左侧按钮"
          color="#fff"
        />
      ),
    };
  };
  _onPress = () => {
    alert('You tapped the button!');
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="profile 页面"
          onPress={() => navigate('Profile', {names: 'Jane'})}
        />
        {/* <Button
          title="ios时间日期选择"
          onPress={() => navigate('DatePicker', {name: '📅选择'})}
        /> */}
        <Button
          title="Details 页面"
          onPress={() => navigate('Details', {name: 'Home-Detail'})}
        />
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'Tap me!'}
          onPress={this._onPress}>
          <View>
            <Text>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
