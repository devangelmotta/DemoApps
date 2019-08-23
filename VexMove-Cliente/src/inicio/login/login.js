
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
const { height, width } = Dimensions.get('window');
export default class Quiniela_Login extends Component {
  constructor(props){
    super(props);

    this.state={
      email: undefined,
      password: undefined,
      hiddenPassword: true,
    }
  }

  render() {
    return (
    <View style={styles.container}>

    <View style={[styles.item, {backgroundColor: '#080808'}]} />
    <View style={[styles.item, {backgroundColor: '#101010'}]} />
    <View style={[styles.item, {backgroundColor: '#181818'}]} />
    <View style={[styles.item, {backgroundColor: '#202020'}]} />
    <View style={[styles.item, {backgroundColor: '#282828'}]} />
    <View style={[styles.item, {backgroundColor: '#303030'}]} />
    <View style={[styles.item, {backgroundColor: '#383838'}]} />
    <View style={[styles.item, {backgroundColor: '#404040'}]} />
    <View style={[styles.item, {backgroundColor: '#484848'}]} />
    <View style={[styles.item, {backgroundColor: '#505050'}]} />
    <View style={[styles.item, {backgroundColor: '#585858'}]} />
    <View style={[styles.item, {backgroundColor: '#606060'}]} />
    <View style={[styles.item, {backgroundColor: '#686868'}]} />
    <View style={[styles.item, {backgroundColor: '#696969'}]} />
    <View style={[styles.item, {backgroundColor: '#707070'}]} />
    <View style={[styles.item, {backgroundColor: '#787878'}]} />
    <View style={[styles.item, {backgroundColor: '#808080'}]} />
    <View style={[styles.item, {backgroundColor: '#888888'}]} />
    <View style={[styles.item, {backgroundColor: '#909090'}]} />

          
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000",
    alignItems: 'center', alignContent: 'center'
  },
  item: {
    height: height*.5, 
    elevation: 10, 
    shadowColor: 'aaa',
    marginTop: height*.2,
    width: width*.8,
  }
});
