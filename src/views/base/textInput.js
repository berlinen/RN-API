import React from 'react';
import {TextInput} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('useless placeholder');

  return (
    <TextInput
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
      }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
