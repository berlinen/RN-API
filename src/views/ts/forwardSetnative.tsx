import React from 'react'
import {Text, View} from 'react-native'

interface Props {
  label: string
}

class MyButton extends React.Component<Props> {
  setNativeProps = (nativeProps: any) => {
    this._root.setNativeProps(nativeProps);
  }
  _root: any;

  render() {
    const {label} = this.props
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Text>{label}</Text>
      </View>
    )
  }
}
export default MyButton