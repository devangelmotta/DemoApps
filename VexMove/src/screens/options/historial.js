import React, { Component } from 'react';
import {
  Text, 
  View,
  Animated,
  Dimensions, 
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { 
  Icon,
  Left,
  Body,
  Right,
  Title,
  Button,
  Header, 
  Content, 
  Container,
  Accordion
} from "native-base";

import url from '../../API/endpoints/url';
const { height, width } = Dimensions.get('window');

var data= [];
export default class Vex_Soluciones_Historial extends Component {
  constructor(props){
    super(props);

    this.state={
      loadAccordion: false
    }
  };

  getServices=(token) =>{
    fetch(url.getServices.endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json,text/html',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.length) {
                data = responseJson.map((item, index)=>{
                    return(
                        { title: "Paciente: "+item.cliente.nombre, content: 
                        <Text>
                          <Text>
                          {"\n"}{item.fecha.date}
                          </Text>
                          <Text>
                          {"\n"}Paciente : {item.cliente.nombre}
                          </Text>
                          <Text>
                          {"\n"}Celular: {item.cliente.celular}
                          </Text>
                          <Text>
                          {"\n"}Precio: {item.precio} $ {item.moneda}
                          </Text>
                        <Text 
                          onPress={()=> alert("Ok")}
                          style={{ 
                            textAlign:"right", 
                            fontWeight:"bold", 
                            fontSize:20,
                          }}>{"\n"}{"\n"}Terminado</Text>
                        </Text>
                        }
                    )
                })
                this.setState({
                  loadAccordion: true
                })
            }
            else {
                alert("ResponseJson es undefined ", JSON.stringify(responseJson))
            }
        })
        .catch((error) => {
            alert("> Error " + error);
        })
        .done(
        );
    
}

    componentDidMount(){
      AsyncStorage.getItem('@userData:user')
            .then((value) => {
                if (value !== null && value !== undefined) {
                    userInfo = JSON.parse(value); 
                    this.getServices(userInfo.access_token)
                    
                }
                else {
                    return "Error!"
                }
            }).catch((error) => {
                console.log(error)
                return "Error!"
            })
          }
    
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: "#fff"}}>
                <View style={styles.header}>
                    <View style={{marginLeft:20}}>
                      <TouchableWithoutFeedback
                        onPress={()=> this.props.navigation.goBack()}>
                        <Icon name='arrow-back' style={{fontSize:30, color:"#fff"}}/>
                      </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.headerIcon}>
                      <Icon type="AntDesign" name="clockcircle" style={{fontSize: 40, color: '#CCC'}}/>
                    </View>
                    <View style={styles.headerText}>
                      <Text style={styles.textHeader}>
                        Historial
                      </Text>
                    </View>
                  </View>
                {this.state.loadAccordion &&
                <View style={{marginTop: 20}}>
                    <Accordion
                    dataArray={data}
                    icon="ios-checkmark-circle-outline" expandedIcon="arrow-up"
                    iconStyle={{ color: "#303030", fontSize:30 }}
                    expandedIconStyle={{ color: "red", fontSize: 30 }}
                    headerStyle={{ backgroundColor: "#fff", borderBottomWidth: 0.5, borderBottomColor:"#fff", marginTop:5  }}
                    contentStyle={{ backgroundColor: "#CCC" }}
                    />
                </View>}
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:height*.1,
    width:width,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ddecf8"
  },
  historial:{
    height:height*.1,
    flexDirection: "row",
    backgroundColor: "#ddecf8"
  },

  header:{
    backgroundColor:"#000",
    flexDirection: "row",
    alignItems:"center",
    height: height*.1

  },
  headerIcon:{
    marginLeft: 20,
    backgroundColor:"#000",
    height: height*.1,
    flexDirection:"row",
    alignItems:"center"
  },
  headerText: {
    marginLeft:20, 
    backgroundColor:"#000"
  },
  textHeader:{
    fontSize: 20,
    fontWeight:"200",
    color:"#CCC"
  },

});
