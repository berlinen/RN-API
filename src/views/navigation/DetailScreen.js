import React, {memo} from 'react';
import {View, Text} from 'react-native';

const DetailsScreen = memo(() => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Details!</Text>
  </View>
));

export default DetailsScreen;
