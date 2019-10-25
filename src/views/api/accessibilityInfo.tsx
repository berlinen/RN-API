import React from 'react'
import {AccessibilityInfo, View, Text, AppState, BackHandler} from 'react-native'

export default class AccessibilityStatusExample extends React.Component {
  [x: string]: any;
  state = {
    reduceMotionEnabled: false,
    screenReaderEnabled: false,
    appState: AppState.currentState,
  };

  public backHandler: any

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      this._handleReduceMotionToggled,
    );
    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      this._handleScreenReaderToggled,
    );

    AccessibilityInfo.isReduceMotionEnabled().then((reduceMotionEnabled) => {
      this.setState({reduceMotionEnabled});
    });
    AccessibilityInfo.isScreenReaderEnabled().then((screenReaderEnabled) => {
      this.setState({screenReaderEnabled});
    });

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.goBack(); // works best when the goBack is async
      return true;
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'reduceMotionChanged',
      this._handleReduceMotionToggled,
    );

    AccessibilityInfo.removeEventListener(
      'screenReaderChanged',
      this._handleScreenReaderToggled,
    );

    this.backHandler.remove();
  }

  _handleReduceMotionToggled = (reduceMotionEnabled: any) => {
    this.setState({reduceMotionEnabled});
  };

  _handleScreenReaderToggled = (screenReaderEnabled: any) => {
    this.setState({screenReaderEnabled});
  };

  render() {
    return (
      <View>
        <Text>
          The reduce motion is{' '}
          {this.state.reduceMotionEnabled ? 'enabled' : 'disabled'}.
        </Text>
        <Text>
          The screen reader is{' '}
          {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
        </Text>
        <Text>Current state is: {this.state.appState}</Text>
      </View>
    );
  }
}