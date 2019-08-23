import React, { Component } from 'react';
import { 
  View,
  WebView,
  Dimensions, 
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Icon,
  Text,
  } from 'native-base';
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Policy extends Component {
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
        <View style={{flexDirection:'row', alignItems: 'center', height: height*.1, backgroundColor:'#000'}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600' ,marginLeft:30}}>TÉRMINOS DE USO</Text>
        </View>
        <WebView 
            source={{uri: 'https://www.vexsoluciones.com/calidad-garantia/'}}
            style={{width: width, height:height*.9}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    width: width, 
    height: height,
    flex: 1,
  },
});