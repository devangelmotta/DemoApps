import React, { Component } from 'react';
import {
  Text, 
  View,
  Alert,
  Image,
  Animated,
  Dimensions, 
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { 
  Icon,
  Left,
  Title,
  Header, 
  Button,
  Content, 
  Container,
  Accordion
} from "native-base";
import url from '../../API/endpoints/url';
import Historial from '../../screens/options/historial';
const { height, width } = Dimensions.get('window');

var data= [];
export default class Vex_Soluciones_User_Task extends Component {
  constructor(props){
    super(props);

    this.state={
      loadAccordion: false
    }
  };

    _destroySesion=()=>{
      Alert.alert(
        'Salir de Movilidad Mx',
        '¿Quieres cerrar sesión?',
          [
            {text: 'Cancelar', onPress: () => console.log('Cancelado'), style: 'cancel'},
            {text: 'Cerrar sesión', onPress: () => this.callDestroyDataStorage()},
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
    var {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor:"#F5F5F5", flex:1, height:height}}>
        <View style={{alignContent:"center", alignItems:"center", justifyContent:"center", backgroundColor:"#000", height:height*.12}}>
          <Image 
            source={require('../../assets/icons-app/logos/logo.png')}
            style={{width:width*.6, height:width*.12}}
          />
        </View>

        <View style={{marginTop:20}}>
          <TouchableOpacity
            onPress={()=>navigate("ShowHistorial")}>

          <View style={styles.container}>
          
            <View style={styles.historial}>
              <View style={{paddingLeft:10}}>
                <Icon type="AntDesign" name="clockcircle" style={{fontSize: 40, color: '#202020'}}/>
              </View>
              <View style={{marginLeft:30, fontSize:20}}>
                <Text>Historial</Text>
              </View>
            </View>

            <View style={{marginRight:10, backgroundColor: "#fff"}}>
              <Icon type="SimpleLineIcons" name="arrow-right" style={{fontSize: 20, color: '#202020'}}/>
            </View>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={()=>navigate("ShowSupport")}>
          <View style={styles.container}>
            <View style={styles.historial}>
              <View style={{paddingLeft:10, backgroundColor: "#fff"}}>
                <Icon type="FontAwesome" name="support" style={{fontSize: 40, color: '#202020'}}/>
              </View>
              <View style={{marginLeft:30, fontSize:20}}>
                <Text>Soporte</Text>
              </View>
            </View>
            <View style={{marginRight:10, backgroundColor: "#fff"}}>
              <Icon type="SimpleLineIcons" name="arrow-right" style={{fontSize: 20, color: '#202020'}}/>
            </View>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.logout}>
          <TouchableWithoutFeedback
              onPress={()=> this._destroySesion()}>          
            <Text style={{fontSize:20, fontWeight:"100", 
             marginLeft: 10}}>
              Cerrar sesión
            </Text>
          </TouchableWithoutFeedback>
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:height*.1,
    width:width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:"center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  historial:{
    flexDirection: "row",
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems:"center",
    justifyContent:"center"
  },
  logout:{
    backgroundColor:"#fff", 
    marginTop: 20, 
    height:height*.1,
    flexDirection: "row",
    alignItems: "center",
    alignContent:"center",
  },

});
