import React, { Component } from 'react';
import { 
  View,
  Image,
  Easing,
  Animated,
  Keyboard,
  Dimensions, 
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
   Text,
   Form, 
   Item, 
   Left, 
   Body,
   Icon, 
   Title,
   Input, 
   Right,
   Label,
   Header, 
   Button, 
   Content, 
   Container,
    } from 'native-base';
const fondo = require('../assets/icons-app/fondo.jpg');
const { height, width } = Dimensions.get('window');
var count = 0;
export default class Vex_Soluciones_Test extends Component {
  constructor(props){
    super(props);

    this.state={
      email: undefined,
      password: undefined,
      hiddenPassword: true,
      keyboardHeight: 0,
      shortHeight: 0
    }

    this.animations = {
      login: {
          marginTopLogin: new Animated.Value(60),
          spaceKeyboard: new Animated.Value(0)
      },
  };
  }

    componentDidMount(){
    }

 
  handlerAnimation=()=>{
        Animated.sequence([
        Animated.timing(
            this.animations.login.marginTopLogin, 
            {
            toValue: 5,
            duration: 5000,
            },
        ),
        
      ]).start();
    }



  render() {
    return (
        <ImageBackground
            source={fondo}
            resizeMode="cover"
            style={{position:"absolute", flex: 1, zIndex: 0}}
            >
            <Animated.View
                style={{position: "absolute", zIndex: 1, marginTop: 30}}>
                <Text>
                    Prueba
                </Text>
            </Animated.View>

            <Animated.View
                style={{
                    zIndex: 2,
                    marginTop: this.animations.login.marginTopLogin,
                    }}>
              <TouchableOpacity 
              onPress={()=> this.handlerAnimation()}>
              <Text>
                    Other text
                </Text>
                </TouchableOpacity>                  
                
            </Animated.View>

        </ImageBackground>
    );
  }
}