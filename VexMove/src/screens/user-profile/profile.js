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
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.09;
const category = '#828189';
const item = '#404040';
const itemFontSize = 23;
export default class Vex_Soluciones_User_Profile extends Component {
  constructor(props){
    super(props);
    
    this.state={
      disponible: true,
      msg: "Activo"
    }
  };

  handleState=(prevState)=>{
    if(prevState){
      this.setState({
        disponible: false,
        msg: 'Poner en servicio'
      })
    }else{
      this.setState({
        disponible: true,
        msg: 'Activo'
      })
    }

  }

  _destroySesion=()=>{
    Alert.alert(
      'Salir de Movilidad Mx',
      '¿Quieres cerrar sesión?',
        [
          {text: 'Cancelar', onPress: () => console.log('Cancelado'), style: 'cancel'},
          {text: 'Cerrar sesión', onPress: () => this.props.navigation.navigate("ShowLogin")},
        ],
        { cancelable: false },
    )
  }

  callDestroyDataStorage(){
    AsyncStorage.removeItem('@userData:user')
      .then((value) => {
        console.log(">>>>>>>>>USUARIO BORRADO LOCAL-STORAGE>>>>>")
      })
      .catch((error) => {
        console.log('>>>>>>>>>>>ERROR AL BORRAR EL USUARIO <<<<<<<<<<', error)
      })
      .done(()=> this.props.navigation.navigate("Auth"))
  }
    
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor: item, width: wSide}}>

          <View style={styles.category}>
            <Text style={{fontSize: itemFontSize, color:'#FFF', fontWeight:'200', marginLeft:20}}>ESTADO ACTUAL</Text>
          </View>
          <View style={styles.item}>
              <TouchableWithoutFeedback
                onPress={()=> this.handleState(this.state.disponible)}>
              <View style={{flexDirection: 'row', justifyContent:'space-between', width: width*.8, alignItems: 'center'}}>
                <Text style={{color:'#ffcc00', fontSize: 20, marginLeft: 30}}>{this.state.msg}</Text>
                <Icon  name='md-information-circle' style={{ fontSize: 40,color: '#ffcc00', marginRight: 20}}/>
              </View>
              </TouchableWithoutFeedback>
          </View>

          <View style={styles.category}>
            <Text style={{fontSize: itemFontSize, color:'#FFF', fontWeight:'200', marginLeft:20}}>AJUSTES</Text>
          </View>
          <View style={{height: alto*2, flexDirection:'row', alignItems:'center', width: width*.8, justifyContent:'space-between'}}>
              <Thumbnail square large
              style={{marginLeft: 30}}
              source={require('../../assets/icons-app/profile.jpg')}/>
              <Icon name='ios-checkmark-circle' style={{color:'#fff', fontSize: 50, marginRight: 20}}/>
          </View>
          
          <TouchableWithoutFeedback
            onPress={()=> navigate('ShowTask')}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Itinerario</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate("ShowReferidos")}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Referidos</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate('ShowHistorialCuenta')}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Historial de la cuenta</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate('ShowAvisos')}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Avisos</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate("ShowDatosPerfil")}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Datos de perfil</Text>
          </View>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback
            onPress={()=> this._destroySesion()}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Desconectar</Text>
          </View>
          </TouchableWithoutFeedback>

          <View style={styles.category}>
            <Text style={styles.textHeader}>CONFIGURACIÓN</Text>
          </View>

          <TouchableWithoutFeedback
            onPress={()=> navigate("ShowCuentaBancaria")}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Cuenta bancaria</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate("ShowAjustes")}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Ajustes</Text>
          </View>
          </TouchableWithoutFeedback>

          <View style={styles.category}>
            <Text style={{fontSize: itemFontSize, color:'#FFF', fontWeight:'200', marginLeft:20}}>EMPRESA</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={()=> navigate("ShowBlog")}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Blog</Text>
          </View>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback
            onPress={()=> navigate("ShowHelp")}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Ayuda</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate('ShowSupport')}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Llamar a la Central</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> navigate('ShowPolicy')}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Términos de uso</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={()=> this.props.navigation.closeDrawer()}>
          <View style={styles.item}>
                <Text style={styles.textItem}>Salir</Text>
          </View>
          </TouchableWithoutFeedback>
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
    width: width*.8
  },
  category: {
    flexDirection:'row', 
    backgroundColor: category, 
    alignItems:'center', 
    height: alto,
    },
  item: {
    //backgroundColor: item, 
    flexDirection: 'row', 
    alignItems:'center',
    height: alto,
    borderTopColor: '#181818', 
    borderTopWidth: 1,
    elevation: 1,

    },
  textHeader:{
    fontSize: itemFontSize, 
    color:'#FFF', 
    fontWeight:'200', 
    marginLeft:20
  },
  textItem: {
    color:'#FFF', 
    fontSize: 18, 
    marginLeft: 25,
    fontWeight: '600',
    fontFamily: 'Roboto',
  }
});
