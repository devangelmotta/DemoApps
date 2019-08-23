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

export default class Vex_Soluciones_Tus_Viajes extends Component {
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
            <View style={{backgroundColor:'#000', width: '100%', height:'20%', justifyContent:'space-between'}}>

                <TouchableWithoutFeedback
                    onPress={()=> this.props.navigation.navigate("ShowMain")}>
                    <View style={{marginLeft: 20, marginTop: 30}}>
                        <Icon name='arrow-back' style={{fontSize:30, color:"#fff"}}/>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{marginLeft: 20, marginTop: 15, backgroundColor:'#000',}}>
                    <Text style={{fontSize:25, color:'#fff'}}>Tus viajes</Text>
                </View>

                <View style={{flexDirection:'row', width: '100%', justifyContent:'space-between', marginTop: 10, backgroundColor:'#000',}}>
                    <TouchableWithoutFeedback
                        onPress={()=> this.setState({
                            anteriores: true,
                            proximos: false,
                            familiar: false
                        })}>
                        <View style={{
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',
                            height: 40,
                            width:'33.3%',
                            backgroundColor:'#000',
                            borderBottomWidth:4, 
                            borderBottomColor: 
                            this.state.anteriores? 'blue':'#000', 
                            }}>
                            <Text style={{fontSize:14, color:'#fff'}}>Anteriores</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> this.setState({
                            anteriores: false,
                            proximos: true,
                            familiar: false
                        })}>
                        <View style={{
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',
                            height: 40,
                            width:'33.3%',
                            borderBottomWidth:4, 
                            backgroundColor:'#000',
                            borderBottomColor:this.state.proximos? 'blue':'#000', 
                            }}>
                            <Text style={{fontSize:14, color:'#fff'}}>Próximos</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> this.setState({
                            anteriores: false,
                            proximos: false,
                            familiar: true
                        })}>
                        <View style={{
                            justifyContent:'center', 
                            alignContent:'center',
                            alignItems:'center',
                            backgroundColor:'#000',
                            height: 40,
                            width:'33.3%',
                            borderBottomWidth:4, 
                            borderBottomColor:this.state.familiar? 'blue':'#000'
                            }}>
                            <Text style={{fontSize:14, color:'#fff'}}>Familiar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            { this.state.anteriores &&
            <View style={{height: '80%', width:'100%', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                <Text style={{color:'#181818', fontSize: 20}}>
                    Aún no has tomado un viaje
                </Text>
            </View>
            }

            { this.state.proximos &&
            <View style={{height: '80%', width:'100%', justifyContent: 'center', alignContent: 'center', alignItems:'center'}}>
                <Text style={{color:'#181818', fontSize: 20}}>
                    Aún no has tomado un viaje
                </Text>
            </View>    
            }

            { this.state.familiar &&
            <View style={{height: '80%', width:'100%'}}>
                <View style={{marginTop: 20, marginLeft: 10}}>
                    <Text style={{fontSize: 28, color: '#000', textAlign:'center'}}>
                        Mantén a tu familia en movimiento
                    </Text>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                    <Text style={{fontSize:15, color:'#000', textAlign:'center'}}>
                        Con un Perfil familiar, puedes pagar los viajes de tus seres queridos y recibir notificaciones cuando viajen. Además, puedes hacer un seguimiento de los viajes Uber de tu familia fácilmente y desde un solo lugar.
                    </Text>
                </View>
                <View style={{
                    margin: '4%', 
                    height: 40, 
                    width: '92%', 
                    flexDirection:'row',
                    backgroundColor:'#000',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems:'center'
                    }}>
                    <Text style={{fontSize: 22, color:'#FFF', fontWeight:'100'}}>CREA UN PERFIL FAMILIAR</Text>
                </View>
            </View>    
            }
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
