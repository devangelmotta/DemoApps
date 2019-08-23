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
  Thumbnail,
  } from 'native-base';
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Help_me_please extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true
    }
  };
    
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ height: height*.1, backgroundColor:'#000', width: width, flexDirection:'row', flexDirection:'row', alignItems:'center'}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600', marginRight:10}}> Preguntas frecuentes</Text>
        </View>
        <ScrollView>
            <Text style={{
                color:'#000', 
                fontSize: 20, 
                fontFamily:'Roboto', 
                marginTop: 20, 
                }}>Preguntas frecuentes</Text>

                <Text style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: '300',
                    marginTop: 30, 
                    }}>Aquí encontrarás</Text>

                <Card style={{width: width*.95}}>
                    <TouchableWithoutFeedback
                      onPress={()=> navigate("ShowLoginAndLogup")}>
                      <CardItem bordered style={styles.cardItem}>
                          <Text style={styles.textItem}>Inicio de sesión y registro</Text>
                      </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback 
                      onPress={()=> navigate("ShowInfoAccount")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Cuentas de usuario</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Pedir servicio</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Servicio</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Nuestros conductores Vex</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Formas y medios de pago</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Cancelación de servicio</Text>
                    </CardItem>
                </Card>
            <Text></Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f8f8f8",
    alignItems: 'center',
    alignContent: 'center',
    width: width, 
    height: height,
    flex: 1,
  },
  cardItem: {
    height:height*.1
  },
  textItem:{
      color: '#888',
      fontSize: 20,
      fontFamily: 'Roboto'

  }
});