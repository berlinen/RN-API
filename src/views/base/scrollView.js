/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, Image, Text, View} from 'react-native';

const titleArr = ['start', 'step-two', 'step-three', 'the last'];

export default class ScrollViewPage extends Component {
  render() {
    return (
      <ScrollView>
        {titleArr.map((item, index) => {
          return (
            <View>
              <Text style={{fontSize: 48}} key={index}>
                {item}
              </Text>
              {new Array(10).fill('item').map((itx, inx) => {
                return (
                  <Image
                    key={inx}
                    source={{
                      uri:
                        'https://facebook.github.io/react-native/img/tiny_logo.png',
                      width: 64,
                      height: 64,
                    }}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
