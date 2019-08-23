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
         <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowHelp")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20, marginTop: 20}}/>
            </TouchableWithoutFeedback>
            <View style={styles.titleHead}>
              <Text numberOfLines={1} style={styles.titleHeadItem}>Inicio y registro</Text>
            </View>
        </View>
        <ScrollView>

            <Text style={{
                color:'#000',
                fontSize: 25,
                fontFamily: 'Roboto',
                marginTop: 20,
                marginLeft: 20, 
                marginBottom: 30
            }}>Cuenta de usuario</Text>

                <Card style={{width: width*.95}}>
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
                        onPress={()=> navigate("ShowRecoveryAccount")}>                    
                        <CardItem bordered style={styles.cardItem}>
                            <Text style={styles.textItem}>Recuperar mi cuenta</Text>
                        </CardItem>
                    </TouchableWithoutFeedback>
                    <CardItem bordered style={styles.cardItem}>
                        <Text style={styles.textItem}>No puedo iniciar sesión. ¿Qué hago?</Text>
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