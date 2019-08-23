import React, { Component } from "react";
import { View, Text, Image, Platform, Dimensions, StyleSheet, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { Icon, Thumbnail } from 'native-base'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
const { height, width } = Dimensions.get('window');
export default class Search extends Component {
  state = {
    searchFocused: false, 
    loadSearch: false,
  };

  render() {
    const { searchFocused } = this.state;
    const { onLocationSelected } = this.props;
    //console.warn("> ", onLocationSelected)

    return (
      <MapView
      style={{ flex: 1 }}>
      style={{width:width, height:height}}>
       <View style={{backgroundColor:'#fff', marginTop: 40}}>
          <View style={{flexDirection:'row', width: width, justifyContent:'space-between', backgroundColor: '#FFF', marginTop: 10}}>
            
            <View style={{marginLeft: 20, marginTop: 10}}>
                <TouchableWithoutFeedback
            style={{height: 40, width: 40}}
                onPress={()=> this.props.navigation.navigate("ShowMain")}>
                      <Icon name='arrow-back' style={{fontSize:30, color:"#000"}}/>
                  </TouchableWithoutFeedback>
                </View>
            

            <TouchableWithoutFeedback
              onPress={()=> this.props.navigation.navigate("ShowMain")}>
              <View style={{flexDirection: 'row', alignItems:'center', marginRight: 20}}>
                <Thumbnail small source={require('../../assets/icons-app/profile.jpg')}/>
                <Text style={{color:'#000', fontSize: 10, marginLeft: 10}}>Para mí</Text>
                <Icon name='ios-arrow-down' style={{color:'#000', fontSize: 10, marginLeft: 10}}/>
              </View>
            </TouchableWithoutFeedback>
            <View />
          </View>
          <View style={{flexDirection:'row', marginTop: 15, marginBottom: 10}}>

              <View style={{width:8, alignItems: 'center', marginLeft: 15, marginTop: 19}}>
                <View style={styles.circleIcon}/>
                <View style={styles.verticalDivider}/>
                <View style={styles.squareIcon}/>
              </View>

              <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F8F8F8', width: width*.7, height: 40, marginLeft: 20}}>
                <Text style={{color:'#181818', fontSize:18, marginLeft: 10}}>Cll 21N # 7A-19</Text>
              </View>

              <View style={{height: 90, width: width*.1, alignItems: 'center', justifyContent: 'space-between', marginLeft: 15}}>
                <View />
                <Icon name='ios-add' style={{color:'#000', fontSize: 50}}/>
              </View>
          </View>
        </View>

        <GooglePlacesAutocomplete
        placeholder="¿A dónde quieres ir?"
        placeholderTextColor="#c8c8c8"
        onPress={onLocationSelected}
        query={{
          key: "AIzaSyC6mWJ3eS3q0JFT4zqSxTT8J7hmoJCMrAY",
          language: 'es',
          //radius: '1000', 
          components:'country:co',
          //strictbounds: true,
        }}
        autoFocus={true}
        textInputProps={{
          onFocus: () => {
            this.setState({ searchFocused: true });
          },
          onBlur: () => {
            this.setState({ searchFocused: false });
          },
          autoCapitalize: "none",
          autoCorrect: false
        
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}
       // renderLeftButton={()  => <Image style={{width:25, height:25}} source={require('../../assets/icons-app/icons/square.jpg')} />}
        styles={{
          container: {
            position: "absolute",
            backgroundColor: 'transparent',
            top: Platform.select({ ios: 120, android: 150 }),
            width: "100%"
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: "transparent",
            height: 40,
            width: width *.7,
            marginHorizontal: 42,
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            height: 40,
            margin: 0,
            backgroundColor: '#F0F0F0',
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 10,
            paddingRight: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 0,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 0,
            borderWidth: 0,
            borderColor: "#DDD",
            fontSize: 15
          },
          listView: {
            borderWidth: 1,
            borderColor: "#DDD",
            backgroundColor: "#FFF",
            marginHorizontal:0,
            elevation: 5,
            width:'100%',
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 10
          },
          description: {
            fontSize: 16
          },
          row: {
            padding: 20,
            height: 58
          }
        }}
      />
      </MapView>

      
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