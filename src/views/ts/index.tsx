import React from 'react'
import {View} from 'react-native'
import Hello from './hello'

const Index: React.FC = () => {
  return (
    <View>
      <Hello  name="berlin" enthusiasmLevel={2} />
    </View>
  )
}

export default Index