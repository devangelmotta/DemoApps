import React, { Component } from 'react';
import { 
  View,
  Image,
  Easing,
  Animated,
  Keyboard,
  TextInput,
  Dimensions, 
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback
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
const { height, width } = Dimensions.get('window');
const flag_mexico = require('../../assets/icons-app/flag/flag_mexico.jpg')
var focus = false;
export default class Vex_Soluciones_Login extends Component {
  constructor(props){
    super(props);

    this.state={
      email: undefined,
      password: undefined,
      hiddenPassword: true,
      emailFocus: true,
      passFocus: false,
      marginBottom: height*.06,
      shortHeight: 0
    }

    this.animations = {
      login: {
          FirstVerticalLot: new Animated.Value(height*.8),
          SecondVerticalLot: new Animated.Value(height*.3),
          Icon: new Animated.Value(height*.8),
          HeadIconArrow: new Animated.Value(-width*.15),
      },
  };
  }
    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e => this._keyboardDidShow(e));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', e => this._keyboardDidHide(e));
    }
    componentDidMount(){
        this.handlerFirstVerticalLot()
    }

    componentWillUnmount(){
        
        Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow);
    }
    _keyboardDidShow=(e)=>{
        if(e!==null && e!==undefined){
            this.setState({
                marginBottom: e.endCoordinates.height + height*.06
            }); 
        }
    }
    _keyboardDidHide=(e)=>{
        if(e===null&&e!==undefined){
            this.setState({
                marginBottom: height*.06,
            }); 
        }
    }
    handlerScrolling=()=>{

    }    
  handlerFirstVerticalLot=()=>{
        Animated.parallel([
            Animated.timing(
                this.animations.login.FirstVerticalLot, 
                {
                toValue: height*.1,
                duration: 1200,
                useNativeDrive: true,
                }),
            Animated.timing(
                this.animations.login.SecondVerticalLot, 
                {
                toValue: width*.07,
                duration: 1200,
                useNativeDrive: true
                }),
            Animated.timing(
                this.animations.login.Icon, 
                {
                toValue: height*.22,
                duration: 1200,
                useNativeDrive: true
                }),
        ]).start((e)=> {if(e){
            this.handlerHeadIconArrow()
        }})
  }

  handlerHeadIconArrow=()=>{
    Animated.sequence([
        Animated.timing(
            this.animations.login.HeadIconArrow, 
            {
            toValue: width*.05,
            duration: 300,
            useNativeDrive: true
            }),
      ]).start((e)=>{if(e){focus= true}});
  }
  _handlerLogin(){
      this.props.navigation.navigate("App")
      //handlerLogin(this.state.email, this.state.password); 
  }
  _handlerRegistro(){
    this.props.navigation.navigate("ShowRegistro")
  }
  render() {
    return (
        <View style={{height:height}}>
        <ImageBackground 
            source={require('../../assets/icons-app/fondo.jpg')}
            resizeMode="cover"
            style={{
                zIndex:0,
                flex:1,
                justifyContent:"space-between"
        }}>
        <Animated.View 
        style={{
            zIndex: 2,
            position:"absolute",
            marginTop: height*.026,
            marginLeft: this.animations.login.HeadIconArrow,
            
            }}>
            <Button transparent
                onPress={()=> this.props.navigation.navigate("ShowLoginBack")}>
                <Icon name='arrow-back' style={{fontSize:25, color:"#000"}}/>
            </Button>
        </Animated.View>

        <Animated.View style={{
            zIndex: 2,
            width:width*.6,
            flexDirection:"row",
            transform: [ 
                {translateX: this.animations.login.SecondVerticalLot}, 
                {translateY: this.animations.login.FirstVerticalLot} 
              ] 
            }}>
            <Text style={{ color:"#CCC", fontSize: 22}}>Ingresa tus datos para continuar</Text>
        </Animated.View>

        <Animated.View style={{
            flexDirection: 'row',
            marginLeft: width*.07,
            zIndex: 3,
            position:'absolute',
            transform: [ 
                {translateY: this.animations.login.Icon} 
              ] 
        }}>
            <Image 
                source={flag_mexico}
                style={{width:height*.05, height:height*.04}}
            />
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 18, color:'#000'}}>+ 155</Text>
            </View>
        </Animated.View>

        <View style={{
            marginTop: height*.2, 
            marginLeft: width*.3,
            position:"absolute",
            zIndex: 3}}>
            <Form style={{zIndex: 3}}>
                <Item inlineLabel style={{width: width*.6, zIndex: 3}}>
                        <Input 
                            keyboardAppearance="dark"
                            style={{borderBottomWidth:2}}
                            keyboardType='phone-pad'
                            placeholder="321 1234567" 
                            placeholderTextColor="#CCC"
                            autoFocus={focus}
                            onFocus={()=> this.setState({emailFocus: true, passFocus: false})}
                            onChangeText={(text)=> this.setState({email: text})}
                        />
                </Item>
            </Form>
                                       
        </View>        
        </ImageBackground>
        <View 
            style={{
                flexDirection:"row", 
                width: width, 
                alignSelf:"flex-end",
                justifyContent:"space-between",
                alignContent: "center",
                alignItems:"center", 
                marginBottom: this.state.marginBottom,
                }}>
            <View style={{marginLeft: 30, color:"#181818"}}>
                <Text>
                    Continuar...
                </Text>
            </View>
            <Button transparent
                onPress={()=> this._handlerLogin()}>
                <Icon type="FontAwesome5" name="arrow-circle-right" style={{fontSize:60, color:"#181818"}} />
            </Button>
        </View>
</View>
    
    );
  }
}