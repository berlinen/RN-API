import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import Hello from './hello'
import MyButton from './setnative'
import MyButtonAdd from './forwardSetnative'
import ClearText from './clearText'

const Index: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Hello  name="berlin" enthusiasmLevel={2} />
     <TouchableOpacity>
        <MyButton  label="按钮" />
     </TouchableOpacity>
     <TouchableOpacity>
        <MyButtonAdd label="Press mew!" />
      </TouchableOpacity>
      <ClearText />
    </View>
  )
}

export default Index