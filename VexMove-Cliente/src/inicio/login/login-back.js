import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  Keyboard,
  Animated,
  Dimensions, 
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  TouchableWithoutFeedback
} from 'react-native';
import {
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
import handlerLogin from '../../API/api-request/sign-in';
import Divider from '../../comunes/divider';
const { height, width } = Dimensions.get('window');
const flag_mexico = require('../../assets/icons-app/flag/flag_mexico.jpg');

export default class Vex_Soluciones_LoginBack extends Component {
  constructor(props){
    super(props);

    this.state={
      email: undefined,
      password: undefined,
      hiddenPassword: true,
    }
    this.animations = {
        login: {
            marginTopWelcome: new Animated.Value(-height*.7),
            marginHorizontal: new Animated.Value(-width*.2), 
            marginVerticalFlag: new Animated.Value(-height*.7),
            HeadIconArrow: new Animated.Value(width*.05),
            opacityArrow: new Animated.Value(1),
            opacity: new Animated.Value(0.5),
        },
    };
    }
    handlerVerticalText(){
      Animated.parallel([
          Animated.timing(
              this.animations.login.marginTopWelcome, 
              {
              toValue: 0,
              duration: 2000,
              useNativeDrive: true
              }),
          Animated.timing(
              this.animations.login.marginHorizontal, 
              {
              toValue: 0,
              duration: 2000,
              useNativeDrive: true
              }),
          Animated.timing(
              this.animations.login.marginVerticalFlag, 
              {
              toValue: 0,
              duration: 2000,
              useNativeDrive: true
              }),
          Animated.timing(
              this.animations.login.HeadIconArrow, 
              {
              toValue: width*-0.2,
              duration: 800,
              useNativeDrive: true
              }),
          Animated.timing(
              this.animations.login.opacityArrow, 
              {
              toValue: 0,
              duration: 700,
              useNativeDrive: true
              }),
          Animated.spring(
              this.animations.login.opacity, 
              {
              toValue: 1,
              duration: 800,
              useNativeDrive: true
              }),
        ]).start();
    }
    componentDidMount(){
        this.handlerVerticalText()
    }   
  handlerAnimation=()=>{
    this.props.navigation.navigate("ShowLoginForm")
 
  }

  _handlerLogin(){
      handlerLogin(this.state.email, this.state.password); 
  }
  
  _handlerRegistro(){
    this.props.navigation.navigate("ShowRegistro")
  }
  render() {
    return (
    <View style={{
      backgroundColor: "#fff", 
      height: height,
      width: width,
      zIndex: 0,
      }}>
        <Animated.View 
        style={{
            zIndex: 2,
            position:"absolute",
            opacity: this.animations.login.opacityArrow,
            marginTop: height*.026,
            marginLeft: this.animations.login.HeadIconArrow,
            
            }}>
            <Button transparent
                onPress={()=> this.props.navigation.navigate("ShowLoginBack")}>
                <Icon name='arrow-back' style={{fontSize:25, color:"#000"}}/>
            </Button>
        </Animated.View>

          <ImageBackground
            source={require('../../assets/inicio-assets/welcome/welcome.png')}
            style={{ width: width, height: height*.62, justifyContent:"flex-start", position:'absolute'}}
            >
            <View style={{justifyContent:'center',  flexDirection:"row", marginTop:30}}>
              <Image 
                source={require('../../assets/icons-app/logos/logo.png')}
                style={{width:width*.8, height:width*.16}}
                />
            </View>
          </ImageBackground>
          <TouchableWithoutFeedback
            onPress={()=> this.props.navigation.navigate("ShowLoginForm")}>
          <View 
            style={styles.formContainer}>

              <View style={{marginTop: height*.05, marginLeft:height*.05}}>
                <Text style={{fontSize:20, color: "#000"}}>
                  Viaja con Movilidad Mx
                </Text>
              </View>
              

              <View style={styles.formCenter}>
                  <Animated.View style={{
                    flexDirection:'row',
                    opacity: this.animations.login.opacity,
                    transform: [ 
                      {translateY: this.animations.login.marginVerticalFlag} 
                    ],
                    }}>
                    <Image 
                      source={flag_mexico}
                      style={{width:height*.05, height:height*.04}}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={{fontSize: 18, color:'#000'}}>
                        + 155
                      </Text>
                    </View>
                  </Animated.View>
                  <Animated.View style={{
                    marginLeft:10, 
                    width:width*.6,
                    opacity: this.animations.login.opacity,
                    transform: [ 
                      {translateX: this.animations.login.marginHorizontal}, 
                      {translateY: this.animations.login.marginTopWelcome} 
                    ],
                    }}>
                    <Text style={{ color:"#CCC", fontSize: 22, textAlign:'center'}}>
                        Ingresa tu número de teléfono móvil
                    </Text>
                  </Animated.View>
              </View>

              <View style={styles.boxFooter}>
                <View style={{marginLeft:height*.05}}>
                  <Text style={{ color:"#2775A4", fontSize: 18}}>
                    O regístrate
                  </Text>
                </View>
              </View>
          </View>
          </TouchableWithoutFeedback>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
  },
  formContainer:{
    justifyContent:"space-between",
    width: width,
    marginTop: height*.62,
    height: height*.35,
  },
  formCenter:{
    flexDirection:"row", 
    marginLeft:height*.03, 
    flex:1,
    width:width,
    alignItems:"center"
  },
  boxFooter:{
    height: height*.1,
    borderTopWidth: 0.5,
    borderTopColor:"#CCC",
    flexDirection:"row",
    alignItems:"center"
  },
});

{/* <Animated.View 
style={{
  transform: [ 
      {translateX: this.animations.login.marginHorizontal}, 
      {translateY: this.animations.login.marginTopWelcome} 
    ],
    width:width*.6
    }}>
  <Text style={{ color:"#CCC", fontSize: 22}}>
      Ingresa tus datos para continuar
  </Text>
</Animated.View> */}