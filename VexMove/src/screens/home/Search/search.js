import React, { Component } from "react";
import { View, Text, Image, Platform, Dimensions, StyleSheet, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { Icon, Thumbnail } from 'native-base'
const { height, width } = Dimensions.get('window');
export default class Search extends Component {
  state = {
    searchFocused: false, 
    loadSearch: false,
  };

  render() {
    //console.warn("> ", onLocationSelected)

    return (

       <View style={{backgroundColor:'#fff', flex: 1}}>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%', 
    height: '100%',
    backgroundColor:"#fff",
  },
  circleIcon: {
    width: 7,
    height: 7,
    borderRadius: 7/2,
    backgroundColor:'#CCC'
  },
  squareIcon: {
    width: 8, 
    height: 8,
    backgroundColor: '#000' 
  },

  verticalDivider:{
    width: 1,
    height: 45,
    borderLeftWidth: 0.3,
    borderLeftColor: '#CCC'
  }

});