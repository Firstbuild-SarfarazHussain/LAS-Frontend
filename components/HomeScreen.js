import React from 'react';
import { View, Text, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
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

