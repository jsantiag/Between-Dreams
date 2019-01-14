import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native';
import { DreamEntryPage } from '../components/DreamEntryPage';

  lightPink = '#CD99AB', 
  brightMaroon = '#A0304E',
  deepMaroon = '#3F232C',
  darkest = '#2B202B';



module.exports =  class HomeScreen extends React.Component {
  constructor(){
    super();
}
    static navigationOptions = {
    title: 'New Dream Log',
    headerStyle: {
      backgroundColor: brightMaroon,
    },
    headerTintColor: lightPink,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      // <View>
      //  {/* {DreamEntryPage} */}
      // </View> 
      <View style={styles.container}>
      <TextInput style={styles.textInput}
        editable = {true}
        defaultValue = {"Write anything you remember upon waking, feelings, words, images. If nothing, then write that down to help make remembering your dream life a daily habit."}
        multiline = {true}
        clearTextOnFocus = {true}       
      />
       {/* <TextInput
        editable = {true}
        defaultValue = {"make connections to your waking life here, is there anything these dream fragments bring to mind?"}
        multiline = {true}
      /> */}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:10
  },
  textInput:{
    borderWidth:1, 
      borderRadius:10,
      borderColor:brightMaroon,
      height:150, 
      width:300, 
      backgroundColor:'black', 
      alignSelf:'center', 
      textAlignVertical:'top', 
      color: lightPink,
      padding: 5
  },
  textColor:{
    color: '#CD99AB'
  }
});