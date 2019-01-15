import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'; 

const deepMaroon = '#3F232C';

module.exports = class DreamEntryPage extends React.Component {
  constructor(){
    super();
}
  render(){
    return(
      <View style={styles.container}>
        <Text>work pls</Text>
        <TextInput
          editable = {true}
          defaultValue = {"Write anything you remember upon waking, feelings, words, images. If nothing, then write that down to help make remembering your dream life a daily habit."}
          multiline = {true}
        />
         <TextInput
          editable = {true}
          defaultValue = {"make connections to your waking life here, is there anything these dream fragments bring to mind?"}
          multiline = {true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: deepMaroon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color:'blue'
  }
});

