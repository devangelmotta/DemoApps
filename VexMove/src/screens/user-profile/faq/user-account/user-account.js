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
export default class Vex_Soluciones_User_account extends Component {
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
        <View style={{ height: height*.1, backgroundColor:'#000', width: width, flexDirection:'row', flexDirection:'row'}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowHelp")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600', marginRight:10}}>Cuenta de usuario</Text>
        </View>
        <ScrollView>
            <Text style={{
                color:'#000', 
                fontSize: 20, 
                fontFamily:'Roboto', 
                marginTop: 20, 
                marginLeft: 20,
                }}>Preguntas frecuentes</Text>

                <Text style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    marginTop: 30, 
                    marginLeft: 20,
                    }}>Aquí encontrarás</Text>

                <Card style={{width: width*.95}}>
                    <TouchableWithoutFeedback
                      onPress={()=> navigate("ShowInfoUserAccount")}>
                      <CardItem bordered style={styles.cardItem}>
                          <Text style={styles.textItem}>Información de cuenta de usuario</Text>
                      </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> navigate("ShowChangeName")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Cómo cambiar mi nombre de usuario</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> navigate("ShowChangeCorreo")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Cambiar mi correo electrónico</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> navigate("ShowPhoneNumber")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Cambiar mi número telefónico</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> navigate("ShowChangeImageProfile")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Cambiar mi foto de perfil</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> navigate("ShowChangeLicense")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Actualizar mi licencia de conducir</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=> navigate("ShowChangeAntecedentes")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Actualizar mis antecedentes</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>
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
      color: '#aaa',
      fontSize: 20,
      fontFamily: 'Roboto',
      textAlign:'center'

  }
});