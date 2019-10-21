import React, {Component} from 'react';
import {
  Text,
  Button,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  View,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  state = {
    email: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>标题</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.form}
          keyboardVerticalOffset={100}>
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
          <View>
            <Button title="Sign Up" onPress={this._submit} />
            <Text style={styles.legal}>
              Some important legal fine print here
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

  _submit = () => {
    alert(`Confirmation email has been sent to ${this.state.email}`);
  };
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
  legal: {
    margin: 10,
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
