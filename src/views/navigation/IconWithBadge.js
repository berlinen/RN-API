/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // 6.2.2;

const IconWithBadge = memo(({name, badgeCount, color, size}) => (
  <View style={{width: 24, height: 24, margin: 5}}>
    <Ionicons name={name} size={size} color={color} />
    {badgeCount > 0 && (
      <View
        style={{
          position: 'absolute',
          right: -6,
          top: -3,
          backgroundColor: 'red',
          borderRadius: 6,
          width: 12,
          height: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
          {badgeCount}
        </Text>
      </View>
    )}
  </View>
));

export default IconWithBadge;
