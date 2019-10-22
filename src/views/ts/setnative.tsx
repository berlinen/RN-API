import React from 'react'
import {Text, TouchableOpacity, View, Alert} from 'react-native'

interface Props {
  label: string,
}

const MyButton : React.SFC<Props> = ({label}) =>  {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  )
}

export default MyButton