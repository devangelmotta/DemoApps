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
  Thumbnail,
  } from 'native-base';
var avatar = require('../../API/fake-data/fake-img/carlosgomez.jpg')
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Avisos extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true
    }
  };
    
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems: 'center', height: height*.1, backgroundColor:'#000'}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600' ,marginLeft:30}}>AVISOS</Text>
        </View>
        <ScrollView>
        <View>
        <Text style={styles.date}>MARZO 2019</Text>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡Prepárate para ganar!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <Text style={styles.date}>FEBRERO 2019</Text>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        <View style={styles.item}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}>¡El reto Vex Soluciones!</Text>
            <Text style={styles.secondaryTitle}>18/04</Text>
          </View>
          <Icon name='ios-arrow-forward' style={styles.iconRight}/>
        </View>
        </View>
        </ScrollView>
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
  iconRight: {
    color:'#ddd', 
    fontSize: 25, 
    fontWeight: 'bold', 
    fontFamily:'Roboto',
    marginRight: 20
  },
  title: {
    color:'#000', 
    fontSize: 18, 
    fontFamily:'Roboto'
  },
  secondaryTitle: {color:'#CCC', fontSize: 16, fontFamily: 'Roboto'},
  item: {
    flexDirection:'row', 
    marginTop: 10,
    alignItems:'center', 
    justifyContent:'space-between',
  },
  date: {
    marginTop: 20, 
    marginBottom: 10, 
    marginLeft: 20,
    fontFamily: 'Roboto', 
    fontSize: 22, 
    color:'#CCC'
  },
});