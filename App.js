import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, Alert, DrawerLayoutAndroid, ToolbarAndroid } from 'react-native';
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import styles from './assets/css/style';
import Hr from 'react-native-hr-component'; 
import Icon from 'react-native-vector-icons/Ionicons';  

//import HomeScreen from './components/HomeScreen';
//import LoginScreen from './components/LoginScreen';
//import RegisterScreen from './components/RegisterScreen';

class WelcomeScreen extends Component {  
  static navigationOptions = {  
       title: '', 
       header: false,
  };  
  render() {  
      return (  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('./assets/images/splash.png')}  
            onPress={() => this.props.navigation.navigate('Login')}        
          />
          <Text style={{color: '#5f5e6e', fontWeight :"bold", fontSize : 20, marginTop: 10 }} onPress={() => this.props.navigation.navigate('Login')}>First Test</Text>
        </View> 
      );  
  }  
}  

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./assets/images/splash.png')}  
          onPress={() => this.props.navigation.navigate('Login')}        
        />
        <Text style={{color: '#5f5e6e', fontWeight :"bold", fontSize : 20, marginTop: 10 }} onPress={() => this.props.navigation.navigate('Login')}>First Test</Text>
      </View>
    );
  }
}

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./assets/images/email.png')} />
          <TextInput style={styles.inputs}
              placeholder="Email address"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./assets/images/password.png')} />
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('MyProfile')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.passwordTextStyle}>Forgot password</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.registerStyle}>Not a member yet? <Text style={styles.registerTextStyle}> Register</Text></Text>
        </TouchableHighlight>
        
        <Hr text="OR" fontSize={14} lineColor="#bdbdbd" color="#bdbdbd" textPadding={20} textStyles={styles.hrBreakText} hrStyles={styles.hrBreakLine} />  
        <View style={{flex: 1, flexDirection: 'row', marginTop:30}}>
          <Image style={{width: 45, height: 45}} source={require('./assets/images/google.png')} />
          <Image style={{width: 50, height: 50, marginLeft: 20}} source={require('./assets/images/facebook.png')} />
        </View>
      </View>
    );
  }
}

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./assets/images/user.png')} />
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./assets/images/email.png')} />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./assets/images/password.png')} />
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./assets/images/password.png')} />
          <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(confirmpassword) => this.setState({confirmpassword})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('MyProfile')}>
          <Text style={styles.loginText}>register</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.registerStyle}>Already have an account? <Text style={styles.registerTextStyle}> Login</Text></Text>
        </TouchableHighlight> 
      </View>
    );
  }
}

class MyProfileScreen extends Component {
  static navigationOptions = {  
    title: ''
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./assets/images/splash.png')}  
          onPress={() => this.props.navigation.navigate('Login')}        
        />
        <Text style={{color: '#5f5e6e', fontWeight :"bold", fontSize : 20, marginTop: 10 }} onPress={() => this.props.navigation.navigate('Login')}>First Test</Text>
      </View>
    );
  }
}


const HomeStackNavigator = createStackNavigator(  
  {  
      HomeNavigator: HomeScreen   
  },  
  {  
      defaultNavigationOptions: ({ navigation }) => {  
          return {  
              header: null, 
          };  
      }  
  } 
);  

const LoginStackNavigator = createStackNavigator(  
  {  
    LoginNavigator: LoginScreen
  },  
  {  
      defaultNavigationOptions: ({ navigation }) => {  
        return {  
          header: null, 
        };  
      }  
  } 
);

const RegisterStackNavigator = createStackNavigator(  
  {  
    RegisterNavigator: RegisterScreen
  },  
  {  
      defaultNavigationOptions: ({ navigation }) => {  
        return {  
          header: null, 
        };  
      }  
  } 
);

const MyProfileStackNavigator = createStackNavigator(  
  {  
    MyProfileNavigator: MyProfileScreen
  },  
  {  
      defaultNavigationOptions: ({ navigation }) => {  
          return {  
              headerLeft: (  
                  <Icon  
                      style={{ paddingLeft: 10 }}  
                      onPress={() => navigation.openDrawer()}  
                      name="md-menu"  
                      size={30}  
                  />  
              )  
          };  
      }  
  }, 
);

const AppDrawerNavigator = createDrawerNavigator({  
  Home: {  
      screen: HomeStackNavigator  
  },  
  Login: {  
      screen: LoginStackNavigator  
  },
  Register: {  
    screen: RegisterStackNavigator  
  },
  MyProfile: { 
    screen: MyProfileStackNavigator  
  },
     
},
{
  initialRouteName: 'Home',
});  

const AppSwitchNavigator = createSwitchNavigator({  
  Home: { 
    screen: AppDrawerNavigator
  },  
  Login: { 
    screen: LoginScreen
  },
  Register: { 
    screen: RegisterScreen
  },  
  MyProfile: { 
    screen: MyProfileScreen
  },
});  

const AppContainer = createAppContainer(AppSwitchNavigator);  

export default class App extends Component {  
  render() {  
      return <AppContainer />;  
  }  
}  