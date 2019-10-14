import React, {Component} from 'react';
import {View, Switch, Text} from 'react-native';

export default class RNSwitchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swicthValue1: true,
      swicthValue2: false,
    };
  }
  _switch1 = () => {
    return (
      <Switch
        style={{marginTop: 20}}
        onTintColor={'#ffaa11'}
        tintColor={'#aaaa11'}
        value={this.state.swicthValue1}
        onValueChange={value => {
          //当开关状态改变了，一定要修改value的值，不然最终无法改变状态
          console.log('onValueChange1 =' + value);
          this.setState({
            swicthValue1: value,
          });
        }}
        testID={'one'}
        thumbTintColor={'#ff1111'}
      />
    );
  };
  _switch2 = () => {
    return (
      <Switch
        style={{marginTop: 20}}
        onTintColor={'#aaaaff'}
        tintColor={'#ffaa11'}
        value={this.state.swicthValue2}
        onValueChange={value => {
          //当开关状态改变了，一定要修改value的值，不然最终无法改变状态
          console.log('onValueChange2 =' + value);
          this.setState({
            swicthValue2: value,
          });
        }}
        testID={'two'}
        thumbTintColor={'#11ff11'}
      />
    );
  };
  _switch3 = () => {
    return (
      <Switch
        onTintColor={'#aafaff'}
        tintColor={'#1faa11'}
        value={this.state.swicthValue2}
        onValueChange={value => {
          //当开关状态改变了，一定要修改value的值，不然最终无法改变状态
          console.log('onValueChange2 =' + value);
          this.setState({
            swicthValue2: value,
          });
        }}
        testID={'two'}
        thumbTintColor={'#f1ff11'}
        disabled={true}
      />
    );
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#dddddd', alignItems: 'center'}}>
        <View
          style={{
            marginTop: 40,
            width: 340,
            height: 200,
            backgroundColor: '#ffffff',
            borderRadius: 5,
            alignItems: 'center',
          }}>
          {this._switch1()}
          {this._switch2()}
          <Text style={{marginTop: 20, textAlign: 'center'}}>
            下面的switch设置disabled为true，无法点击，但是可以设置value的值来改变状态
          </Text>
          {this._switch3()}
        </View>
      </View>
    );
  }
}
