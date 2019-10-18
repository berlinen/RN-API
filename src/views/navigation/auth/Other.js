/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/bg.jpeg')}
          style={{resizeMode: 'contain', flex: 1}}
        />
        <SafeAreaView style={styles.attribution}>
          <Text style={{color: '#fff'}}>
            Photo by Mitchell Henderson on Unsplash
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  attribution: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
