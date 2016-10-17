/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';
import Dimensions from 'Dimensions';
var {height, width} = Dimensions.get('window');
import FitImage from 'react-native-fit-image';

export default class ReactNativeTest extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <FitImage source={{
            uri: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97500&w=200&h=500'
          }}/>
          <Image style={styles.fitWidth} source={require('./200x500.png')}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  fitWidth: {
    width: width,
    height: 500,
    borderWidth: 1
  }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
