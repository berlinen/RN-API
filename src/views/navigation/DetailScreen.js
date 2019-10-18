/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
        <Image
          source={require('../../assets/images/bg.jpeg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  }
}

export default DetailsScreen;
