import React, {Component} from 'react';
import {View, Slider, StyleSheet, Text} from 'react-native';

export default class SliderBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
    };
  }

  _onChange = value => {
    this.setState({
      value: value,
    });
  };
  render() {
    return (
      <View style={styles.subView}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={this.state.value}
          onValueChange={this._onChange}
        />
        <Text style={styles.text}>当前选择的value：{this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#aaaaaa',
    alignItems: 'center',
  },
  subView: {
    backgroundColor: '#ffffff',
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 320,
  },
  slider: {
    width: 280,
    marginTop: 20,
  },
  text: {
    marginTop: 20,
  },
});
