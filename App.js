import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>yas bitch!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b27',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color:'#d663a6'
  }
});
