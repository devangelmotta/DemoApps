import React, { Component } from 'react';
import { 
  Text,
  View,
  Alert,
  Image,
  Animated,
  Dimensions, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import {
   Icon,
   Button,
    } from 'native-base';
const { height, width } = Dimensions.get('window');
const CancelarServicio = require('../../assets/icons-app/icons/error.png');
const TerminarServicio = require('../../assets/icons-app/icons/success.png');
export default class Vex_Soluciones_Buttons_EndService extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true
    }
  };

  handlerButtons=(cancel)=>{
    if(cancel){
      this.props.navigation.navigate("ShowComentarios")
    }else{
      this.props.navigation.navigate("ShowSignature")
    }
        

    }
 
  render() {
      let cancel=true;
    return (
        <View style={styles.container}>
        <View></View>

        <View style={{alignItems:"center", flexDirection:"column"}}>
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:25, fontWeight:"700", textAlign:"center"}}>
                    ¿Qué quieres hacer?
                </Text>
            </View>

            <View style={{marginTop: 30}}>
                <TouchableHighlight
                    onPress={()=> this.handlerButtons(true)}>
                    
                    <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <Image 
                          source={CancelarServicio }
                          style={{width: 80, height: 80}}
                        />
                        <View>
                        <Text 
                        style={{ 
                            textAlign:"center", 
                            fontSize:20,
                            textShadowColor:"#fff",
                            textShadowRadius: 2
                        }}>
                            Cancelar servicio
                        </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{marginTop: height*.1}}>
                <TouchableHighlight
                    onPress={()=> this.handlerButtons(false)}>
                    <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <Image 
                      source={TerminarServicio}
                      style={{width: 80, height: 80}}
                    />
                    <View>
                        <Text
                        style={{ 
                            textAlign:"center", 
                            fontSize:20,
                            textShadowColor:"#fff",
                            textShadowRadius: 2
                        }}>
                        Finalizar viaje
                        </Text>
                    </View>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        <View style={{marginBottom:30}}>
            <Button warning full
               style={{height:height*.1}}
               onPress={()=> this.props.navigation.navigate("ShowMain")}>
               <Text>
                 VOLVER
               </Text>
            </Button>     
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between",
    backgroundColor:"#fff"
  },
  
});