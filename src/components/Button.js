import React from 'react'; 

import {Text, StyleSheet, TouchableHighlight} from 'react-native'; 

const StandardButton = (props) => {
  return (

    <TouchableHighlight 
      onPress={props.onPress}
      style={styles.buttonBody}
    >
      <Text style={StyleSheet.buttonText}>{props.children}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#A0304E',
    width: '50%',
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 8, 
    padding: 20,
  }, 
  buttonText:{
    fontSize:14, 
    fontWeight: '400',
  }
})

export {StandardButton}; 