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
export default class Vex_Soluciones_RecoveryAccount extends Component {
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
        <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowHelp")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20, marginTop: 20}}/>
            </TouchableWithoutFeedback>
            <View style={styles.titleHead}>
              <Text numberOfLines={1} style={styles.titleHeadItem}>Cómo recuperar mi cuenta</Text>
            </View>
        </View>
        <ScrollView>



                <Card style={{width: width*.95}}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>¿Cómo recupero mi cuenta?</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>
                        {"\n"}
                        1. Abra su app de Vex Movilidad y oprima la zona <Text style={styles.textPrimary}>Ingresa tu número de teléfono móvil</Text>,
                        e ingrese su número de teléfono móvil. Recibirá un SMS con un código de confirmación. La app detectará el código automáticamente
                        y lo llevará a su pantalla de <Text style={styles.textPrimary}>Inicio</Text>. 
                        {"\n"}
                        2. En la pantalla de Inicio oprima el ícono "Menú" en la parte superior izquierda de su pantalla.
                        {"\n"}
                        3. Seleccione <Text style={styles.textPrimary}>Datos de perfil</Text>. Eso le llevará a otra pantalla donde encontrará sus datos.
                        {"\n"}
                        4. En la pantalla de datos de su perfil, seleccione <Text style={styles.textPrimary}>Métodos de pago</Text>. Y seleccione su método de pago preferido.
                        {"\n"}
                        5. Introduzca los datos requeridos para establecer su método de pago. 
                        {"\n"}
                        6. ¡Ya está, ahora puedes usar <Text style={styles.textPrimary}>Vex Movilidad</Text> e ir a donde quieras!
                        {"\n"}
                        </Text>
                        <Text style={styles.textUtilQuestion}>¿Fue útil la respuesta</Text>
                        <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between', margin: 20, width:width*.9}}>
                            <View style={{
                                backgroundColor: '#000',
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignContent: 'center',
                                justifyContent: 'space-between',
                                borderRadius: 6,
                                width: width*.4,
                                height: height*.09
                                }}>
                                <Icon type='AntDesign' name='like1' style={styles.iconStyle}/>
                                <Text style={styles.textButtom}>SI</Text>
                                <View />
                            </View>
                            <View style={{
                                backgroundColor: 'red',
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignContent: 'center',
                                justifyContent: 'space-between',
                                borderRadius: 6,
                                width: width*.4,
                                height: height*.09
                                }}>
                                <Icon type='AntDesign' name='like1' style={styles.iconStyle}/>
                                <Text style={styles.textButtom}>SI</Text>
                                <View />
                            </View>
                        </View>
                    </CardItem>
                </Card>

                <Card style={{width: width*.95, marginTop: 30}}>
                <TouchableWithoutFeedback
                        onPress={()=> navigate("ShowHowSignUp")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>¿Cómo me registro en Vex Movilidad?</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={()=> navigate("ShowHowSignIn")}>
                        <CardItem bordered style={styles.cardItem}>
                            <Text style={styles.textItem}>¿Cómo inicio sesión</Text>
                        </CardItem>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                      onPress={()=> navigate("ShowCannotLogin")}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>No puedo iniciar sesión. ¿Qué hago?</Text>
                    </CardItem>
                    </TouchableWithoutFeedback>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Métodos de pago</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>Solicitar servicio</Text>
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
    width: width, 
    height: height,
    flex: 1,
  },
  cardItem: {
    flexDirection: 'column'
  },
  textItem:{
      color: '#181818',
      fontSize: 20,
      fontFamily: 'Roboto',
      textAlign:'center'
  },
  textPrimary:{
      color: '#000',
      fontSize: 20,
      fontFamily: 'Roboto'
  },
  textButtom: {
      color: '#fff',
      fontSize: 25,
      fontFamily: 'Roboto'
  },
  iconStyle:{
      color:'#fff',
      fontSize: 30,
      marginLeft: 5
  },
  textUtilQuestion:{
    color: '#000',
    fontSize: 20, 
    fontFamily: 'Roboto',
    marginTop: 40
  },
  titleHead: {
    width: width, 
    alignContent: 'center', 
    alignItems: 'center',
    marginTop: 5, 
    marginBottom: 10
  },
  titleHeadItem: {
    fontSize:25, 
    color:'#fff', 
    fontFamily:'Roboto', 
    fontWeight:'600',
  },
  header: {
    height: height*.15, 
    backgroundColor:'#000', 
    width:width
  }
});