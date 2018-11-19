
import React, {Component} from 'react';
import { View,Text , StyleSheet  } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

       <View  style = { styles.container }>
         <Text>Test1</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:
      {
        flex: 1,
        backgroundColor: '#9FA8DA' // Set your own custom Color
      }
  });
