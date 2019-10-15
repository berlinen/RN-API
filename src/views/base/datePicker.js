import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet} from 'react-native';

export default class DatePickerBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
    };
  }

  setDate = newDate => {
    this.setState(() => {
      chosenDate: newDate;
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
