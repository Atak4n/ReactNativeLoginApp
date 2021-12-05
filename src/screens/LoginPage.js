import React from 'react';
import {View,Text,Image,StyleSheet, Button,TextInput,TouchableOpacity } from 'react-native';

const LoginPage = () => {
  
  return (
    <View style={styles.viewStyle}>

      <Text style={styles.textStyle}>Trakya University Login Page</Text>

      <Image
        title="logo"
        style={styles.logo}
        source={require('../../assets/logo.png')}/>

        <View style={styles.viewStyle2}>

          <View style={styles.viewStyle3}>
            <Text style={styles.usernameStyle}>Username : </Text>
            <TextInput style={styles.nameInput}/>
          </View>

          <View style={styles.viewStyle4}>
            <Text style={styles.passwordStyle}>Password  : </Text>
            <TextInput secureTextEntry={true} style={styles.passInput}/>
          </View>

        </View>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
    
        </View>
    
  )};
  
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewStyle2:{
    backgroundColor: '#C8EBF3',
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    borderBottomColor: 'black'
  },

  viewStyle3:{
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  viewStyle4:{
    flexDirection: 'row',

  },

  textStyle: {
    fontSize:25,
    color:'black',
    fontFamily:'Times New Roman',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:7
  },

  logo: {
    width: 411,
    height: 411
  },

  usernameStyle:{
    fontSize: 25,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    marginLeft: 5
  },

  passwordStyle:{
    fontSize: 25,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    marginLeft: 5
},

  nameInput:{
    fontSize: 25,
    alignItems: 'stretch',
    width: 250
},

  passInput:{
    fontSize: 25,
    alignItems: 'stretch'
},

buttonStyle: {
  elevation: 8,
  backgroundColor: "#68BCCF",
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  width: 150,
  marginTop: 15
},

ButtonText: {
  fontSize: 18,
  color: "#111D1A",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
}

});

export default LoginPage;