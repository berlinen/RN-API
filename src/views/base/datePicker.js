/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };

  render() {
    const {show, date, mode} = this.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View>
          <Button onPress={this.datepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={this.timepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({name: '更新了标题!'})}
        />
      </View>
    );
  }
}
