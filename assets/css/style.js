'use strict';
import { StyleSheet } from 'react-native';

// For Login Page only
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#f2f1f6',
        borderRadius:2,
        borderBottomWidth: 1,
        width:320,
        height:65,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color: '#5f5f69',
        fontSize: 16,
    },
    inputIcon:{
      width:15,
      height:15,
      marginLeft:20,
      justifyContent: 'center',
      opacity: 0.1
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:8,
    },
    loginButton: {
      backgroundColor: "#00c99d",
    },
    loginText: {
      color: 'white',
      fontSize: 16,
      textTransform: "uppercase",
      fontWeight :"bold"
    },
    registerStyle:{
      color: '#5f5f69',
      fontSize: 18,
    },
    headingText: {    
      fontSize : 25,
      color: '#605f67', 
      width:320,
      marginBottom:40,
      marginTop:60,
    },
    passwordTextStyle:{
      color: '#5f5f69',
      fontSize: 16,
      marginLeft:0,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    registerTextStyle :{
      color: "#00c99d",
      fontSize: 20,
      fontWeight: "bold"
    },
    hairline: {
      backgroundColor: '#A2A2A2',
      height: 2,
      width: 165
    },
    
    loginButtonBelowText1: {
      fontSize: 14,
      paddingHorizontal: 5,
      alignSelf: 'center',
      color: '#A2A2A2'
    },
    hrBreakLine: {
      width : 320,
      paddingLeft: 15,
      paddingRight: 15
    },
    hrBreakText :{
      color: '#bdbdbd'
    },
    toolbar: {
      height: 56,
      backgroundColor: '#fff'
    },
  });