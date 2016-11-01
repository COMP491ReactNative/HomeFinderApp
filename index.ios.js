import React, {Component} from 'react';
import {AppRegistry, Text, NavigatorIOS, StyleSheet} from 'react-native';

// extra components
import SearchPage from './SearchPage';

// class HelloWorld extends Component {
//   render() {
//     return (
//         <Text style={styles.text}>Hello World!</Text>
//       )
//   }
// }

class HomeFinderApp extends Component {
  render() {
    return (
        <NavigatorIOS style={styles.container}
          initialRoute={{title: 'Home Finder', component: SearchPage}}>

        </NavigatorIOS>
      );
  }
}

var styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
      flex: 1
    }
});

AppRegistry.registerComponent('HomeFinder', () => HomeFinderApp)
