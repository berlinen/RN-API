import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native'

export default class App extends Component {
  static navigationOptions = (props:any) => {
    return {
      title: props.navigation.getParam('name'),
    };
  };
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>

        <Text>背景</Text>
        <ImageBackground source={require('../../assets/images/bg.jpeg')} style={{width: '40%', height: '40%'}}>
          <Text>Inside</Text>
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
