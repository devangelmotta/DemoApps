const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIxYTI1NzQzZjk1NTA0ZjRhY2VlYjUxZjI1ZDAyZmJkODZmMDU2ZDQ0MTZmNGEwODkzZWJmMmYxMTQ5MjQzNDc3ZTZkOTc4NTg2OTYxYzZmIn0.eyJhdWQiOiIxIiwianRpIjoiMjFhMjU3NDNmOTU1MDRmNGFjZWViNTFmMjVkMDJmYmQ4NmYwNTZkNDQxNmY0YTA4OTNlYmYyZjExNDkyNDM0NzdlNmQ5Nzg1ODY5NjFjNmYiLCJpYXQiOjE1NTMwOTY1NDgsIm5iZiI6MTU1MzA5NjU0OCwiZXhwIjoxNTg0NzE4OTQ4LCJzdWIiOiI1MyIsInNjb3BlcyI6W119.dT0ZlNC5yBneKcpx0D-wFprxxyE13B48aGc26jQN61oqjxdbtCW1ObficIps2DGPWWN76NU5-YGROrKy75eEQktKYNqCBb8gimxFkg27bOsZbttbWrzH8GjMGuVaQwuYe2W70Fxwel1MwypJQ58-zbQBl9TPNiYLRya_R0_b8rwzMjqBtt5A5zCwP8pNFT7ncM-SSXDisVc6-xDxQQY3Ex_XIXEwjds4BT1pNxFaFYI_AazXprjOPNk76v5LKhu7F3GvRzM6fCrb4wqRy_00A2yv7fNWg3HHjhPBqNIOJyZKQEBJ2RkxnofJEUgo8BVaLGuvTWxN4S__TyuvA6SoNXD-oL4kHCHGiWAeQPgU6FtcWOeBZDI0xwpdegEt4hbvwnPKBtuQz83PcUIowpfbeF6y5kIPh_TaJ-o_w0550f-UyVXHcmQQbllrgfJRXMeB6a8AxyvuT-zfLVAoH8tvEn2itALo5RCsBpLKMF2vUU6W99Ew7ziGnTNHNZU5idcYYPlvrGHKtP7lrhXl3hYKTB87E5jGkMhAWG5oKnHJYaj75DCDShgLwIzbNpej50Y0uzvAl9RnpxPv70BixHP8XXsMqjSUW8EtPqtUmTJWRyXkGS_VHuGPHSIU1nwIM6Uh4UkScrbzRXjkpsp7gXSbt7ISmD4yrPlGl0ywX_qGK9Y"
import React, { Component } from 'react';
import {
  Text, 
  View,
  Animated,
  ScrollView,
  Dimensions, 
  StyleSheet,
  AsyncStorage,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import { 
  Icon,
  Left,
  Body,
  Card,
  Title,
  Right,
  Button,
  Header, 
  Content, 
  Container,
  Accordion
} from "native-base";
//import getServices from '../../API/api-request/get-services';
import getUserData from '../../API/get-data-storage/user';
import LinearGradient from 'react-native-linear-gradient';
import url from '../../API/endpoints/url'
const marginBox= height*.05;
var marginIndicie = 2;
const { height, width } = Dimensions.get('window');
var data= [];
var handler = true;
export default class Vex_Soluciones_User_Task extends Component {
  constructor(props){
    super(props);

    this.state={
      loadAccordion: false,
      god: false,
      flag: false,
      expand: false,

    }

    this.animations = {
      icon: {
          iconMotionUp: new Animated.Value(0),
          iconMotionDown: new Animated.Value(height*.03)
      },
      card: {
        height : new Animated.Value(height*.1)
      },
  };
  };
  
  handlerAnimation=()=>{
    Animated.sequence([
      Animated.timing(
          this.animations.icon.iconMotionUp, 
          {
          toValue: height*.03,
          duration: 200,
          },
      ),
      Animated.timing(
        this.animations.icon.iconMotionDown, 
        {
        toValue: 0,
        duration: 300,
        },
    ),

    ]).start()
  }

    getServices=() =>{
    fetch(url.getServices.endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json,text/html',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.length) {
                console.warn("Get network")
                data = responseJson
            }
            else {
                alert("ResponseJson es undefined ", JSON.stringify(responseJson))
            }
            this.setState({
              loadAccordion: true
            })    
        })
        .catch((error) => {
            alert("> Error " + error);
        })
        .done(
        );
    
}


    componentDidMount(){
      this.getServices()
      // AsyncStorage.getItem('@userData:user')
      //       .then((value) => {
      //           if (value !== null && value !== undefined) {
      //               console.warn("Get Storage");
      //               userInfo = JSON.parse(value); 
      //               this.getServices(userInfo.access_token)
                    
      //           }
      //           else {
      //               return "Error!"
      //           }
      //       }).catch((error) => {
      //           console.log(error)
      //           return "Error!"
      //       })
    }  
    
  render() {
    let {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600', marginLeft:30}}>ITINERARIO</Text>
        </View>

        <ScrollView>
        {this.state.loadAccordion &&data.map((item, index)=>{
          
          let backgr = true;
          if(index%2==0){
            backgr= true
          }else{
            backgr = false;
          }
          marginIndicie++;
          return(
            <View style={{
              height: height*.08, 
              width: width, 
              zIndex: 0,
              marginTop: height*.04,
              flexDirection: 'row'
          }}>
              <
                View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                zIndex: 1,
                width: 42
              }}>

              <Text style={{
                color: backgr? '#000': '#fff',
                fontSize: 18,
                marginLeft: 10,
                fontFamily: 'Roboto',
                textAlign: 'center'
              }}><Text style={{color: backgr? '#000': '#fff', fontFamily: 'Roboto', fontSize: 20, fontWeight: '600'}}>{marginIndicie}</Text>{"\n"}Mar</Text>

              <View style={{
                height: height*.12,
                marginLeft: 65,

                position: 'absolute',
                width: 1,
                zIndex: 1,
                backgroundColor: '#aaa'
              }}/>
              </View>

              
              <View style={[styles.itemCircle]}>
                  {backgr? <View style={styles.circle}/>: <View style={{width: 10, height:0}}/>}
                  <TouchableNativeFeedback 
                    onPress={()=> navigate("ShowItemTask")}>
                  <View
                      style={styles.boxItem}>
                      <Icon name='ios-calendar' style={{color:'#181818', fontSize: 20, marginLeft: 20}}/>
                      <Text style={{color:'#fff', fontFamily: 'Roboto', fontSize: 20, fontWeight:'100', marginLeft: 15}}>{item.cliente.nombre}</Text>
                  </View>
                  </TouchableNativeFeedback>
              </View>
  
          </View>
          )
        }
          )}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f9f9f9",
  },

  header:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    fontFamily:"Roboto",
    width: width,
    height: height*.12,
    elevation: 3,
  },
  divider: {
    marginVertical: height*.05,
    marginLeft: 40,
    height: height*.4, 
    width: 1,
    backgroundColor: '#000'
},
circle: {
width: 10, 
height: 10, 
borderRadius: 10/2, 
backgroundColor: '#bbb'
},
itemCircle: {
    zIndex: 2,
    position: 'absolute',
    alignItems: 'center',
    width: width,
    marginLeft: 60,
    flexDirection: 'row',
},
boxItem: {
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  width: width*.75,
  height: height*.08, 
  elevation: 6,
  marginLeft: 10,
  backgroundColor: '#7B68EE'
},
boxItemStart: {
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  width: width*.8,
  height: height*.08, 
  elevation: 1,
  backgroundColor: '#000',
  marginLeft: 10,
}

});
