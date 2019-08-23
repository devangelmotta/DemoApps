import React, { Component, Fragment } from "react";
import { View, Text, Image, Platform, Animated, Dimensions, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Icon, Thumbnail } from 'native-base'
import Geocoder from "react-native-geocoding";

import { getPixelSize } from "../../utils";

import Search from "../Search/search";
import Directions from "../Directions/directions";
import Details from "../Details/details";

import markerImage from "../../assets/marker.png";
import backImage from "../../assets/back.png";

import {
  Back,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall
} from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
Geocoder.init("AIzaSyC6mWJ3eS3q0JFT4zqSxTT8J7hmoJCMrAY");
const { height, width } = Dimensions.get('window');
export default class Map extends Component {
  state = {
    region: undefined,
    loadSearch: false,
    destination: null,
    duration: null,
    location: null,
    loadFakeSearch: true,
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(","));

        this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      }, //sucesso
      (err) => {
        console.warn("Error :", err)
      }, //erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
      }
    );
  }

  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      }
    });
  };

  handleBack = () => {
    this.setState({ destination: null });
  };

  renderBoxSearch=()=>{
    <TouchableWithoutFeedback
      onPress={()=> this.setState({loadFakeSearch: false})}>
      <View style={styles.searchContainer}>
        <View style={{height: 54, alignItems: 'center', flexDirection:'row'}}>
          <View style={styles.squareIcon}/>
          <View style={{height: 54, alignItems: 'center', flexDirection:'row', marginLeft: 30}}>
            <Text style={styles.labelText}>¿A dónde vas?</Text>
          </View>
        </View>

        <View style={styles.containerRightIcon}>
          <View style={styles.dividerRightIcon}/>
          <View><Icon type='EvilIcons' name='clock' style={{fontSize: 30, color:'#000'}}/></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  }

  render() {
    const { region, destination, duration, location } = this.state;

    return (
      <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='transparent' translucent={true}/>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}
        >
          
          {destination && (
            <Fragment>
              <Directions
                origin={region}
                destination={destination}
                onReady={result => {
                  this.setState({ duration: Math.floor(result.duration) });

                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {

                      right: getPixelSize(100),
                      left: getPixelSize(100),
                      top: getPixelSize(100),
                      bottom: getPixelSize(350)
                    }
                  });
                }}
              />
              <Marker
                coordinate={destination}
                anchor={{ x: 0, y: 0 }}
                image={markerImage}
              >
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>

              <Marker coordinate={region} anchor={{ x: 0, y: 0 }}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>{location}</LocationText>
                </LocationBox>
              </Marker>
            </Fragment>
          )}
        </MapView>
        {!destination && 
        <View style={{
        marginLeft: 20,
        marginTop: height*.05,
        position:'absolute',
        backgroundColor: 'transparent'
        }}>
            <TouchableOpacity
              onPress={()=> this.props.navigation.openDrawer()}>
              <Icon name='md-menu' style={{color:'#000', fontSize: 35}}/>
            </TouchableOpacity>
          </View>
        }

        {destination ? (
          <Fragment>
            <Back onPress={this.handleBack}>
              <Image source={backImage} />
            </Back>
            <Details />
          </Fragment>
        ) : (
              this.state.loadSearch ?
              <Search 
                navigation  = {this.props.navigation}
                onLocationSelected={this.handleLocationSelected} />
                :
                <TouchableWithoutFeedback>
                <View style={{flexDirection: 'row', alignItems: 'center', height: height*.1, width: '90%' ,justifyContent:'space-between', marginHorizontal: '5%'}}
                  onPress={()=> this.setState({loadSearch: true})}>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{height: 5, width:5, backgroundColor: '#000', marginLeft: 20}}/>
                    <Text style={{color:'#000', fontSize: 20, fontWeight:'100', marginLeft: 15}}>¿A dónde vas?</Text>
                  </View>

                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{height: 20, borderEndWidth: 0.3, borderLeftColor: '#CCC'}}/>
                    <Icon type='FontAwesome5' name='clock' style={{color: '#000', fontSize: 20, marginLeft:10, marginRight: 20}}/>
                  </View>
                  </View>
                  </TouchableWithoutFeedback>
        )}
      </View>
    );
  }
}

