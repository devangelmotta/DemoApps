import React, { Component } from 'react';
import { 
  View,
  Alert,
  Modal,
  Image,
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
export default class Vex_Soluciones_Carmbiar_perfil extends Component {
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
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600', marginLeft:30}}>CAMBIAR PERFIL</Text>
        </View>

        <View style={{alignItems: 'center', alignContent:'center'}}>
            <View style={{marginTop: 80}}>
              <Image 
                source={require('../../assets/icons-app/upload.png')}
                style={{width: width*.5, height: width*.5}}/>
            </View>

            <Text style={{color:'#bbb', fontFamily: 'Roboto', fontSize: 20, marginTop: 20}}>CAMBIA FOTO DE PERFIL</Text>

            <View style={styles.buttomUpload}>
              <Text style={{color:'#fff', fontFamily: 'Roboto', fontSize: 25}}>SUBIR</Text>
            </View>
        </View>

        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: 'center',
    width: width, 
    height: height,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    width: width,
    height: height*.1,
    elevation: 3,
  },
  buttomUpload: {
    height: height*.1, 
    width: width*.4, 
    borderRadius: 6, 
    backgroundColor:'#000', 
    flexDirection:'row', 
    alignItems:'center', 
    marginTop: 40, 
    alignContent:'center',
    justifyContent:'center'
  },
});