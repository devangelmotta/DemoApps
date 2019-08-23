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

export default class Vex_Soluciones_Login extends Component {
  constructor(props){
    super(props);

    this.state={
      email: undefined,
    }

  }
    componentDidMount(){
      

    }
      
  render() {
    const { navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <View>
            <View style={styles.user}>
                <View style={{marginLeft: 10}}>
                    <Thumbnail large source={require('../../assets/icons-app/profile.jpg')}/>
                </View>
                <View style={{ paddingLeft: 20}}>
                    <Text style={{color:'#fff', fontSize: 18}}>
                        Leornard Cohen</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{color:'#CCC', fontSize: 17}}>
                            5.00
                        </Text>
                        <View style={{paddingLeft: 5}}>
                            <Icon type='FontAwesome' name='star' style={{color:'#ccc', fontSize: 15}}/>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.subheader}>
                <View style={styles.bodySubheader}>
                    <View style={{backgroundColor:'#000', marginTop:20}}>                    
                        <Text style={{color:'#CCC', fontSize: 13}}>
                            Más posibilidades con tu cuenta
                        </Text>
                    </View>
                    <View style={{backgroundColor:'#000', marginTop: 15, marginBottom: 15}}>
                        <Text style={{color:'#fff', fontSize: 17}}>
                            Genera ganancias al volante
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:'#fff'}}>
                <TouchableWithoutFeedback 
                    onPress={()=> navigate("ShowTusViajes")}>
                    <View style={{marginLeft: 20, marginTop: 22}}>
                        <Text style={{color:'#000', fontSize: 22}}>
                            Tus viajes
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={()=> navigate('ShowAyuda')}>
                    <View style={{marginLeft: 20, marginTop: 22}}>
                        <Text style={{color:'#000', fontSize: 22}}>
                            Ayuda
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={()=> navigate('ShowPago')}>
                    <View style={{marginLeft: 20, marginTop: 22}}>
                        <Text style={{color:'#000', fontSize: 22}}>
                            Pago
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={()=> navigate("ShowViajesGratis")}>
                    <View style={{marginLeft: 20, marginTop: 22}}>
                        <Text style={{color:'#000', fontSize: 22}}>
                            Viajes Gratis
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={()=> navigate("ShowConfiguracion")}>
                    <View style={{marginLeft: 20, marginTop: 22}}>
                        <Text style={{color:'#000', fontSize: 22}}>
                            Configuración
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            </View>

            <View style={{borderTopColor:'#CCC', borderTopWidth: 0.5, width: width*.8, height:height*.15, alignSelf:'flex-end'}}>
                <View style={{marginTop:20, marginLeft: 20}}>
                    <Text style={{fontSize: 15}}>
                        Próximamente más opciones aquí
                    </Text>
                </View>
                <View style={{marginTop:20, marginLeft: 20, marginBottom: 10}}>
                    <Text style={{fontSize: 15}}>
                        Legal
                    </Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width: width*.85,
    justifyContent:'space-between',
    height: height,
    backgroundColor:"#fff",
  },
  subheader:{
    borderTopColor: '#ccc', 
    borderTopWidth: 0.2, 
    backgroundColor:'#000'
  },
  bodySubheader:{
    marginLeft: 10,
    height: height*.12, 
    backgroundColor:'#000'
  },
  user:{
    height: height*.2,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#000'
  },
  textNameUser:{
      color: '#fff',
      fontSize: 18,
      textAlign:'justify'
  },
  textScore:{
    color: '#ccc',
    fontSize: 16
  },
});
