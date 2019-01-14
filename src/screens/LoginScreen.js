import React, {Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput} from 'react-native';

// const lightPink = '#CD99AB', 
const brightMaroon = '#A0304E',
  darkest = '#2B202B';


  module.exports = class LoginScreen extends React.Component {
    constructor(props){
      super(props); 
      this.state = {
        username:'', 
        password:''
      }
    }

    componentDidMount(){
      this._loadInitialState().done();
    }

    _loadInitialState = async () => {
      const value = await AsyncStorage.getItem('user'); 
      if(value !== null) {
        this.props.navigation.navigate('Home')
      }
    }
  // static navigationOptions = {
  //   title: 'Between Dreams',
  //   headerStyle: {
  //     backgroundColor: lightPink,
  //   },
  //   headerTintColor: '#fff',
  //   headerLayoutPreset: 'center',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     color: brightMaroon
  //   },
  // };
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>Between Dreams Login</Text>    
          <TextInput
            style={styles.textInput} placeholder='Username'
            onChangeText= { (username) => this.setState({username})}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={styles.textInput} placeholder='Password'
            onChangeText= { (password) => this.setState({password})}
            secureTextEntry={true} underlineColorAndroid='transparent'
          />
          <TouchableOpacity
              style={styles.btn}
              onPress={this.login}>
              <Text> Log in </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color: 'white'
  },
  header:{
    fontWeight: 'bold',
    color: brightMaroon
  }
});