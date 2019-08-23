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
export default class Vex_Soluciones_Change_name extends Component {
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
              <Text numberOfLines={1} style={styles.titleHeadItem}>Cómo cambiar mi nombre de usuario</Text>
            </View>
        </View>
        <ScrollView>

                <Card style={{width: width*.95, marginTop: 20}}>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItemHead}>Cambiar mi nombre de usuario</Text>
                    </CardItem>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>
                        {"\n"}
                        Para cambiar el nombre de usuario en su cuenta Vex Movilidad siga los siguientes pasos. 
                        {"\n"}
                        {"\n"}
                        1. En la pantalla de <Text>Inicio</Text> seleccione el ícono de menú, en la parte superior izquierda de la pantalla. Esto abrirá su ventana de menú.
                        {"\n"}
                        {"\n"}
                        2. Seleccione <Text style={styles.textPrimary}>Datos de perfil</Text>. Eso le llevará a otra pantalla donde encontrará sus datos.
                        {"\n"}
                        {"\n"}
                        3. En la pantalla de datos de su perfil, seleccione <Text style={styles.textPrimary}>Cambiar perfil</Text>. Si cuenta con autorización para cambiar su nombre de usuario
                        {"\n"}
                        {"\n"}
                        4. Elija<Text style={styles.textPrimary}>Cambiar nombre</Text> y a continuación introduzca su nuevo nombre de usuario.
                        {"\n"}
                        {"\n"}
                        5. ¿No tienes autorización? Si no has solicitado autorización para cambiar tus datos de usuario dirígete a <Text style={styles.textLink}>Solicitar cambio de datos de usuario</Text>                        {"\n"}
                        {"\n"}
                        6. ¡Ya está, ahora puedes volver a <Text style={styles.textPrimary}>Vex Movilidad</Text> e ir a donde quieras!
                        {"\n"}
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
                                <Text style={styles.textButtom}>No</Text>
                                <View />
                            </View>
                        </View>
                    </CardItem>
                    <CardItem>
                      
                    </CardItem>
                </Card>

                <Card style={{width: width*.95, marginTop: 30}}>
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
    alignContent: 'center', 
    alignItems: 'center',
    width: width, 
    height: height,
    flex: 1,
  },
  cardItem: {
    flexDirection:'column'
  },
  textItem:{
      color: '#505050',
      fontSize: 20,
      fontFamily: 'Roboto'
  },
  textItemHead:{
    color: '#202020',
    fontSize: 20,
    fontFamily: 'Roboto'
},
  textPrimary:{
      color: '#000',
      fontSize: 20,
      fontFamily: 'Roboto'
  },
  textLink: {
      color:'blue',
      fontSize: 20, 
      fontFamily: 'Roboto',
      fontWeight: '400'
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
    width: width*.9, 
    marginRight: width*.05,
    marginLeft: width*.05,
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