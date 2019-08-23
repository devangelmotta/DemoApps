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

export default class Vex_Soluciones_Ayuda extends Component {
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
            <View style={{backgroundColor:'#000', width: '100%', height:'15%', marginTop: 15}}>

                <TouchableWithoutFeedback
                    onPress={()=> this.props.navigation.navigate("ShowMain")}>
                    <View style={{marginLeft: 20, marginTop: 20}}>
                        <Icon name='arrow-back' style={{fontSize:30, color:"#fff"}}/>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{marginLeft: 20, marginTop: 15}}>
                    <Text style={{fontSize:25, color:'#fff'}}>Ayuda</Text>
                </View>
            </View>
            <View style={{height: '85%', width: '100%', backgroundColor:'#fff'}}>

                <View style={{marginLeft: 15}}>
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 16, color:'#d8d8d8'}}>
                            Todos los temas
                        </Text>
                    </View>

                    <View style={styles.containerOptions}>
                        <Text style={styles.textOptions}>Problemas con el viaje y reembolsos
                        </Text>
                    </View>

                    <View style={styles.containerOptions}>
                        <Text style={styles.textOptions}>Cuenta y opciones de pago
                        </Text>
                    </View>

                    <View style={styles.containerOptions}>
                        <Text style={styles.textOptions}>Guía de Movilidad Mx
                        </Text>
                    </View>

                    <View style={styles.containerOptions}>
                        <Text style={styles.textOptions}>Regístrate
                        </Text>
                    </View>

                    <View style={styles.containerOptions}>
                        <Text style={styles.textOptions}>Más
                        </Text>
                    </View>

                    <View style={styles.containerOptions}>
                        <Text style={styles.textOptions}>Accesibilidad
                        </Text>
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
  containerOptions: {
    marginTop: 40,
    width: '100%'
  },
  textOptions: {
    fontSize: 20, 
    color:'#000', 
  },

});