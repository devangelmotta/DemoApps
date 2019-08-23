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
   Thumbnail
    } from 'native-base';
const { height, width } = Dimensions.get('window');

export default class Vex_Soluciones_Configuracion extends Component {
  constructor(props){
    super(props);

    this.state={
      anteriores: true,
      proximos: false,
      familiar: false
    }

  }
    componentDidMount(){
      

    }
      
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems: 'center', height: height*.1, backgroundColor:'#000'}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600' ,marginLeft:30}}>CONFIGURACIÓN</Text>
        </View>

            <ScrollView>
            <View style={{
              flexDirection:'row', 
              alignItems:'center',
              borderBottomWidth: 0.5,
              borderBottomColor:'#CCC'
              }}>
              <View style={{marginLeft: 15, marginBottom: 20, marginTop: 20}}>
                <Thumbnail large source={require('../../assets/icons-app/profile.jpg')}/>
              </View>
              <View style={{marginLeft: 15, marginBottom: 20, marginTop: 20}}>
                <Text style={{color:'#000', fontSize: 14}}>Leornard Cohen</Text>
                <Text style={{color:'#000', fontSize: 14}}>+ 51 312 1234567</Text>
                <Text style={{color:'#000', fontSize: 14}}>leornard-cohen@gmail.com</Text>
              </View>
            </View>

            <View style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#CCC'
            }}>
              <View style={{marginTop: 30, marginLeft: 15}}>
                <Text style={{color:'#303030', fontSize: 15}}>Favoritos</Text>
              </View>

              <View style={{flexDirection:'row', marginLeft: 15, alignItems:'center', marginTop: 30}}>
                <View style={{marginLeft: 15}}>
                  <Icon type='FontAwesome' name='home' style={{color:'#000', fontSize: 20}}/>
                </View>
                <View style={{marginLeft: 15}}>
                  <Text style={{color:'#000', fontSize: 15}}>Agregar dirección particular</Text>
                </View>
              </View>

              <View style={{flexDirection:'row', marginLeft: 15, alignItems:'center', marginTop: 18}}>
                <View style={{marginLeft: 15}}>
                  <Icon type='FontAwesome' name='suitcase' style={{color: 'green', fontSize: 20}}/>
                </View>
                <View style={{marginLeft: 15}}>
                  <Text style={{color:'#000', fontSize: 15}}>Agregar dirección de trabajo</Text>
                </View>
              </View>

              <View style={{marginLeft: 15, marginTop: 20, marginBottom: 30}}>
                <Text style={{color: 'blue', fontSize: 15}}>Más ubicaciones guardadas</Text>
              </View>
            </View>

            <View style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#CCC'
            }}>
              <View style={{marginTop: 30, marginLeft: 15}}>
                <Text>Contactos de confianza</Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <View style={{marginLeft: 15}}>
                  <Icon type='MaterialIcons' name='security' style={{color:'#000', fontSize: 20}}/>
                </View>
                <View style={{marginLeft: 15}}>
                  <Text style={{color:'#000', fontSize: 15}}>Administar contactos de confianza</Text>
                </View>
              </View>
              <View style={{marginLeft: 15, marginBottom: 15}}>
                <Text style={{color:'#303030', fontSize:12}}>
                  Comparte el estado de tu viaje con tus familiares y amigos con solo tocar un botón
                </Text>
              </View>
            </View>

            <View style={{
              borderBottomWidth: 0.5, 
              borderBottomColor: '#CCC'
            }}>
              <View style={{marginLeft: 15, marginTop: 20}}>
                <Text style={{color:'#000', fontSize: 15}}>Familiar</Text>
              </View>

              <View style={{marginLeft: 15, marginBottom: 30}}>
                <Text style={{color:'blue', fontSize: 15}}>Establece tu familia</Text>
                <Text style={{color:'#404040', fontSize: 14}}>Paga por tus seres queridos y recibe notificaciones de viajes</Text>
              </View>
            </View>

            <View style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#CCC'
            }}>
              <View style={{marginTop: 20, marginLeft: 15, marginBottom: 20}}>
                <Text style={{color:'#000', fontSize: 15}}>Configuración de privacidad</Text>
                <Text style={{color:'#404040', fontSize: 14}}>Administra la información que compartes con nosotros</Text>
              </View>
            </View>

            <View style={{marginLeft: 15, marginTop: 20, marginBottom: 20}}>
              <Text style={{color:'#000', fontSize: 15}}>Cerrar sesión</Text>
            </View>
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%', 
    height: '100%',
    backgroundColor:"#fff",
  },
  containerOptions: {
    marginTop: 40,
    width: '100%'
  },
  textOptions: {
    fontSize: 20, 
    color:'#000', 
  },

});