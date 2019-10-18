/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View} from 'react-native';

export default class Screen extends React.Component {
  static navigationOptions = ({navigation}) => {
    // const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="左侧按钮"
          color="#fff"
        />
      ),
    };
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
      </View>
    );
  }
}
