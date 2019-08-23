
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
   Icon, 
    } from 'native-base';
const { height, width } = Dimensions.get('window');
const flag_mexico = require('../../assets/icons-app/flag/flag_mexico.jpg');

export default class Vex_Soluciones_Login extends Component {
  constructor(props){
    super(props);

    this.state={
      email: undefined,
      password: undefined,
      hiddenPassword: true,
    }

    this.animations = {
      login: {
          marginTopWelcome: new Animated.Value(0),
          marginTopLogin: new Animated.Value(0),
          marginBottonLogin: new Animated.Value(0),
          marginLogo: new Animated.Value(-width),
          opacity: new Animated.Value(1),
      },
  };
  }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Habilitar ubicación',
          message:
            'Habilita la ubicación para definir tus rutas',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.log(err);
    }  
  } 
  // MovilidadMXCliente#205
    componentDidMount(){
    this.requestCameraPermission()
    }
  
    handlerScrolling=()=>{

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
      flex: 1,
      }}>
          <ImageBackground
            source={require('../../assets/inicio-assets/welcome/welcome.png')}
            style={{ width: width, height: height*.62, justifyContent:"flex-start"}}
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
                  <View style={{flexDirection:'row'}}>
                    <Image 
                      source={flag_mexico}
                      style={{width:height*.05, height:height*.04}}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={{fontSize: 18, color:'#000'}}>
                        + 155
                      </Text>
                    </View>
                  </View>
                  <View style={{marginLeft:10, width:width*.6}}>
                    <Text style={{ color:"#aaa", fontSize: 22}}>
                        Ingresa tu número de teléfono móvil
                    </Text>
                  </View>
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
    height: height*.4,
    flex: 1,
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
