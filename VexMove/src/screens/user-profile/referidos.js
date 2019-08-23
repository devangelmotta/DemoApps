import React, { Component } from 'react';
import { 
  View,
  Alert,
  Modal,
  Animated,
  Dimensions, 
  StyleSheet,
  ToastAndroid,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Icon,
  Card,
  Text,
  Body,
  CardItem,
  Thumbnail
  } from 'native-base';
var avatar = require('../../API/fake-data/fake-img/carlosgomez.jpg')
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Referidos extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true
    }
  };
  handleToast=()=>{
    ToastAndroid.showWithGravityAndOffset(
      '¡Copiado!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems: 'center', height: height*.1}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#000', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#000', fontFamily:'Roboto', fontWeight:'600' ,marginLeft:30}}>REFERIDOS</Text>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center', height: height*.09, backgroundColor:'#CCC', width: width, justifyContent:'space-between'}}>
            <Text style={{color:'#121212', fontSize:13, marginLeft: 20}}>Tu código es: <Text style={{color:'#000', fontSize:15, fontWeight:'bold'}}>xdaisboss</Text></Text>
            <TouchableWithoutFeedback
              onPress={()=> this.handleToast()}>
            <Text style={{fontSize:12, color:'#1e90ff', fontFamily:'Roboto', marginRight:10}}>Presiona para copiar</Text>
            </TouchableWithoutFeedback>
        </View>
        
        <View style={{width: width, marginTop: height*.1}}>
          <Text style={{fontFamily:'Roboto', fontWeight:'bold', fontSize: 40, marginLeft: 20}}>OBTÉN S/ 300</Text>
          <Text style={{marginLeft: 20, fontSize: 20, color:'#BBB', marginTop: 10, marginRight: 30}}>
            Comparte tu código con potenciales conductores. Una vez que se registren con él, obtendrás <Text style={{color:'#000', fontSize: 23, fontFamily: 'Roboto'}}>S/ 6 por viaje </Text>
            por cada uno de sus <Text style={{color:'#000', fontSize: 23, fontFamily: 'Roboto'}}>50 primeros viajes</Text> dentro de los 30 días.
          </Text>
        </View>

        <View style={styles.buttomReferir}>
          <Text style={{color:'#fff', fontSize: 22, fontFamily:'Roboto', fontWeight:'800'}}>Referir conductor</Text>
        </View>

        <View style={{borderTopColor:'#CCC', borderTopWidth: 0.5, width: width*.8, marginLeft: width*.15, marginTop: 50}}/>

        <Text style={{marginTop: 30, marginLeft: 20, marginRight: 40, fontSize: 14, color: '#808080', fontFamily: 'Roboto'}}>
          Tus conductores referidos aparecerán aquí después de registrarse, así podrás seguir su progeso.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    width: width, 
    height: height,
    flex: 1,
  },
  buttomReferir: {
    width: width*.9, 
    height:height*.075,
    marginLeft: width*.05, 
    marginRight:width*.05, 
    marginTop: 30,
    backgroundColor: '#181818', 
    borderRadius: 8, 
    flexDirection:'row', 
    alignItems: 'center', 
    alignContent:'center',
    justifyContent: 'center'
    }
});