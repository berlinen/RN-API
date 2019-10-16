import React from 'react';
import {Button, View} from 'react-native';

export default class Screen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="profile 页面"
          onPress={() => navigate('Profile', {names: 'Jane'})}
        />
        <Button
          title="ios时间日期选择"
          onPress={() => navigate('DatePicker', {name: '📅选择'})}
        />
      </View>
    );
  }
}
