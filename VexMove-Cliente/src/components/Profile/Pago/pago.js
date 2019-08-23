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

export default class Vex_Soluciones_Pago extends Component {
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
            <View style={{backgroundColor:'#000', width: '100%', height:'15%'}}>

                <TouchableWithoutFeedback
                    onPress={()=> this.props.navigation.navigate("ShowMain")}>
                    <View style={{marginLeft: 20, marginTop: 20}}>
                        <Icon name='arrow-back' style={{fontSize:30, color:"#fff"}}/>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{marginLeft: 20, marginTop: 15}}>
                    <Text style={{fontSize:25, color:'#fff'}}>Pago</Text>
                </View>
            </View>
            <View style={{height: '85%', width: '100%', backgroundColor:'#fff'}}>
                <View style={{
                    height:'8%', 
                    borderBottomWidth: 0.5,
                     borderBottomColor: '#000',
                     flexDirection: 'row',
                     alignItems:'center'
                     }}>
                    <View style={{marginLeft: 15}}>
                        <Text style={{fontSize: 14, color:'blue'}}>Agregar método de pago</Text>
                    </View>
                </View>

                <View style={{marginTop: 30, borderBottomWidth: 0.5, borderBottomColor:'#000'}}>
                    <View style={{marginLeft: 15,}}>
                        <Text style={{color:'#ccc', fontSize:15, fontWeight:'200'}}>Perfiles de usuario</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignContent:'center', marginTop: 30, marginLeft: 15,}}>
                        <View>
                            <Icon type='FontAwesome5' name='user-circle' style={{color: 'orange', fontSize: 25}}/>
                        </View>
                        <View style={{marginLeft: 10}}>
                            <Text style={{color: '#000', fontSize: 15}}>Personal </Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignContent:'center', marginTop: 30, marginBottom: 15, marginLeft: 15, alignItems: 'center'}}>
                        <View>
                            <Icon type='FontAwesome' name='suitcase' style={{color: 'green', fontSize: 20}}/>
                        </View>

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 15, color:'blue'}}>Viajar por negocios</Text>
                            <Text style={{color: '#181818', fontSize: 12}}>Habilitar las funciones para los viajes de negocios</Text>
                        </View>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#000'}}>
                     <View style={{marginTop: 30, marginLeft: 15}}>
                         <Text style={{color:'#CCC', fontSize: 14, fontWeight:'200'}}>Promociones</Text>
                     </View>
                     <View style={{marginTop: 30, marginLeft: 15, marginBottom: 25}}>
                         <Text style={{color:'blue', fontSize: 14}}>Agrega un código promo</Text>
                     </View>
                </View>

                <View>
                    <View style={{marginTop: 30, marginLeft: 15}}>
                        <Text style={{color:'#181818', fontSize: 14}}>Cupones</Text>
                    </View>

                    <View style={{marginTop: 30, flexDirection:'row', alignItems:'center', marginLeft: 15}}>
                        <Icon type='FontAwesome5' name='ticket-alt' style={{color:'#000', fontSize: 20}}/>
                        <View style={{marginLeft: 15}}><Text style={{color:'#000', fontSize: 12}}>Cupones</Text></View>
                    </View>
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
});