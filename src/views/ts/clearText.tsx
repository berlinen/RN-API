import React from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';

const ClearText: React.SFC = () => {
  let _textInput: any

  let claerText = () => {
    _textInput.setNativeProps({text: ''})
  }

  return (
    <View>
        <TextInput
          ref={component => _textInput = component}
          style={{height: 50, width: 200, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
        />
        <TouchableOpacity onPress={claerText}>
          <Text>Clear text</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ClearText