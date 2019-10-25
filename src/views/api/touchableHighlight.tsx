import React, { Component, useState } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

interface IState {
  count: number
}

const TouchableHighlights: React.FC<IState> = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <View style={styles.container}>
    <TouchableHighlight
     style={styles.button}
     onPress={() => {
       setCount(count + 2)
     }}
    >
     <Text> Touch Here </Text>
    </TouchableHighlight>
    <View style={[styles.countContainer]}>
      <Text style={[styles.countText]}>
        { count }
      </Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

export default TouchableHighlights
