/* eslint-disable no-alert */
import React, {Component} from 'react';
import {Text, StatusBar, TextInput, View, StyleSheet} from 'react-native';

export default class StatusBarBasic extends Component {
  state = {
    name: '',
    email: '',
  };

  _next = () => {
    this._emailInput && this._emailInput.focus();
  };

  _submit = () => {
    alert(
      `Welcome, ${this.state.name}! Confirmation email has been sent to ${
        this.state.email
      }`,
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundCol="green" />
        <View style={styles.header}>
          <Text style={styles.description}>标题</Text>
        </View>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          ref={ref => {
            this._nameInput = ref;
          }}
          placeholder="Full Name"
          autoFocus={true}
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          returnKeyType="next"
          onSubmitEditing={this._next}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          ref={ref => {
            this._emailInput = ref;
          }}
          placeholder="email@example.com"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={this._submit}
          blurOnSubmit={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 20,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
});
