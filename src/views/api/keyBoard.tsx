import React, {Component} from 'react';
import {Keyboard, TextInput, Alert} from 'react-native';

export default class Example extends Component {
  keyboardDidShowListener: any
  keyboardDidHideListener: any

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    Alert.alert('Keyboard 显示');
  }

  _keyboardDidHide() {
    Alert.alert('Keyboard 隐藏');
  }

  render() {
    return <TextInput onSubmitEditing={Keyboard.dismiss} style={{marginTop: 100}} placeholder="请输入内容" />;
  }
}
