/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, Text} from 'react-native';

class ModalScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize: 30}}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default ModalScreen;
