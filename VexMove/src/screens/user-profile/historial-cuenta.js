import React, { Component } from 'react';
import { 
  View,
  Alert,
  Modal,
  Animated,
  Dimensions, 
  StyleSheet,
  ScrollView,
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
export default class Vex_Soluciones_Historial_cuenta extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true
    }
  };
    
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#000', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text numberOfLines={1} style={{fontSize:25, color:'#000', fontFamily:'Roboto', fontWeight:'600' ,marginLeft:30}}>HISTORIAL DE CUENTA</Text>
        </View>

        <View style={styles.card}>
          <Text style={{color:'#aaa', fontFamily: 'Roboto', fontSize: 35, marginTop: 30, fontWeight:'600'}}>Vex te debe</Text>
          <Text style={{color:'#000', fontFamily: 'Roboto', fontSize: 50, marginTop: 20}}>S/ 22.04</Text>

          <View style={styles.buttom}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#fff', fontSize: 20, fontFamily:'Roboto'}}>COBRAR DINERO</Text>
              <Icon type='SimpleLineIcons' name='energy' style={{color:'#fff', fontSize: 22, marginLeft: 10}}/>
            </View>
          </View>

          <Text style={styles.secondaryText}>
            Puedes retirar tu dinero cuando hayas alcanzado un monto mínimo de S/ 30.00</Text>
        </View>

        <View style={{height: 60}}/>

        <TouchableWithoutFeedback
          onPress={()=> navigate("ShowDesglose")}>
        <View style={styles.desglose}>
          <Text style={{color:'#fff', fontFamily:'Roboto', fontSize: 22, fontWeight:'600'}}>
            Desglose detallado
          </Text>
        </View>
        </TouchableWithoutFeedback>
        <View/>
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f0f0",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width, 
    height: height,
  },
 card: {
   width:width*.9, 
   height:height*.5,
   justifyContent: 'space-between',
    alignItems:'center', 
    borderWidth: 0.5, 
    borderColor:'#ddd', 
    elevation: 3
  },
  buttom: {
    height:height*.07, 
    width: width*.65,
    marginTop: 20, 
    borderRadius: 6,
    flexDirection: 'row', 
    alignItems:'center', 
    alignContent:'center', 
    justifyContent:'center',
    backgroundColor: 'orange'
  },
  secondaryText: {
    color:'#aaa', 
    fontFamily:'Roboto', 
    fontSize: 18, 
    marginBottom: 30,
    marginTop: 15,
    marginLeft: 30, 
    marginRight: 30
  },
  desglose: {
    width:width*.9, 
    height:height*.075, 
    backgroundColor: '#181818', 
    flexDirection:'row', 
    alignContent:'center', 
    alignItems:'center', 
    justifyContent:'center',
    borderRadius: 6
  },
  header: {
    flexDirection:'row', 
    alignItems: 'center', 
    height: height*.1, 
    backgroundColor:'#fff', 
    width: width
  },
});