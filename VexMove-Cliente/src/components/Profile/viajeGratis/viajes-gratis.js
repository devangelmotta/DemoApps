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

export default class Vex_Soluciones_ViajesGratis extends Component {
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
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'#000', width: '100%', height:'15%',}}>

                <TouchableWithoutFeedback
                    onPress={()=> this.props.navigation.navigate("ShowMain")}>
                    <View style={{marginLeft: 20, marginTop: 20}}>
                        <Icon name='arrow-back' style={{fontSize:30, color:"#fff"}}/>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{marginLeft: 20, marginTop: 15}}>
                    <Text style={{fontSize:25, color:'#fff'}}>Viajes gratis</Text>
                </View>
            </View>

            <View style={{marginTop: 30}}>
                <View style={{marginLeft: 15}}>
                    <View>
                        <Text style={{fontSize: 30, color:'#181818'}}>¿Quieres más Movilidad Mx por menos?</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontSize: 14, color:'#000'}}>Obtén un viaje gratis de hasta Mex $ 50.0 cuando invites a un amigo a probar Movilidad Mx</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20}}>
                <View />
                    <Image source={require('../../../assets/icons-app/talking.png')} 
                    style={{width:width*.6, height: width*.6}}/>
                    
                </View>

                <View style={{marginTop: 60, marginLeft: 15}}>
                    <Text style={{color:'#000', fontSize: 14}}>Tu código de invitación</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    height: height*.08,
                    marginLeft: 15,
                    marginRight: 15,
                    borderWidth: 0.5,
                    borderColor:'#000'
                }}>
                    <Text style={{color:'#000', fontSize:14, marginLeft: 10}}>XYZ531</Text>
                    <Text style={{color:'blue', fontSize: 12, marginRight: 10}}>Copiar</Text>
                </View>
            </View>

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