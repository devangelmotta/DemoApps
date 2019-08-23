import React from "react";
import {
  View,
  Text,
  Alert,
  Modal,
  Image,
  Animated,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  Icon, 
  Card,
  Body,
  Button,
  Thumbnail,
  CardItem, 
  } from 'native-base';
  import MapView, {
    Marker,
    AnimatedRegion,
    Polyline,
    PROVIDER_GOOGLE
  } from "react-native-maps";
import haversine from "haversine";
import Profile from '../user-profile/profile';
const { height, width } = Dimensions.get('window');
const car = require('../../assets/icons-app/icons/car.jpg')
const avatar = require('../../API/fake-data/fake-img/carlosgomez.jpg');
const LATITUDE = 19.373786;
const LONGITUDE = -99.144314;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
var showOption = false;
var onService = false;
var spin = '0deg';
export default class Vex_Soluciones_Home extends React.Component {
  static defaultProps = {
};
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      disponible: true,
      msg: 'PONTE DISPONIBLE',
      loadMap: false,
      height: 0,
      onService: false,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    };

    this.animations={
      rotate: new Animated.Value(0)
    }
  }
  componentDidUpdate(){
    
  }


  handlerVehicleAnimation(){
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animations.rotate, {
          toValue: 1,
          duration: 500,
          delay: 1000
        }),
        Animated.timing(this.animations.rotate, {
          toValue: 0,
          duration: 500
        })
      ]),
    ).start()

      spin = this.animations.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '100deg']
    })
  }
  
  componentWillMount() {
    
  }

  componentDidMount() {
    const { coordinate } = this.state;
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        console.log({ newCoordinate });

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 1000,
        distanceFilter: 10
      }
    );

    this.handlerVehicleAnimation()
  }
  
  currentPosition(){
    navigator.geolocation.getCurrentPosition(
      position => {},
      error => console.warn(error.message),
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000
      }
    ), this.setState({
      loadMap: true
    }, this.getWatchPosition())
  }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  calcDistance = (newLatLng) => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  getMapRegion = () => {
    return {
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
    }
  };

  handlerPopup=()=>{
    if(this.state.modalVisible){
      this.setState({
        modalVisible: false
      })
    }else{
      this.setState({
        modalVisible: true
      })
    }
    this.renderPopup()
  }

  renderEndService=(_handler)=>{
    let { navigate } = this.props.navigation
    if(_handler){
      navigate("ShowTask");
    }else{
    navigate("ShowButtonsEndService");
    }
  }

  handleState=(prevState)=>{
    if(prevState){
      this.setState({
        disponible: false,
        msg: 'EN SERVICIO'
      }, ()=> this.props.navigation.navigate("ShowTask"))
    }else{
      this.setState({
        disponible: true,
        msg: 'PONTE DISPONIBLE'
      })
    }

  }

  renderPopup=()=>{
      return(
              <View style={styles.inModalContainer}>
                  <View style={{
                      marginLeft: 10,
                      backgroundColor: 'transparent'
                    }}>
                    <TouchableOpacity
                      onPress={()=> this.props.navigation.openDrawer()}>
                      <Icon name='md-menu' style={{color:'#000', fontSize: 35}}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{
                      borderWidth: 1, 
                      borderColor: '#000',
                      backgroundColor: '#fff', 
                      borderRadius: 10,
                      alignItems: 'center', 
                      alignContent:'center',
                      justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={()=> this.handleState(this.state.disponible)}>
                  <Text style={{color:'#000', fontFamily:'Roboto', fontSize:20, margin:10}}>{this.state.msg}</Text>
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('ShowButtonsEndService')}>
                  <View style={{ backgroundColor:'#fff', marginRight: 20, alignContent:'center', alignItems:'center', justifyContent:'center'}}>
                    <Icon type='FontAwesome5' name='tasks' style={{color:'#000', fontSize:25, margin:10}}/>
                  </View>
                  </TouchableOpacity>
              </View>
      )
  }

  render() {
    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}>
              <Animated.View>
                <Image
                  source={car}
                  style={{height:height*.06, width:height*.03}}
                  />
              </Animated.View>
            </Marker.Animated>
        </MapView>
        <View style={{flex:1, justifyContent:'flex-start', zIndex:0}}>
            <View style={{zIndex:1}}>
              {this.renderPopup()}
            </View>
        </View>

        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </TouchableOpacity>
        </View> */}

        <View style={{width: width, height:height*.12, flexDirection:'row', alignItems:'center', backgroundColor:'#fff', zIndex:2}}>

            <View style={{width: width*.5, height:height*.12, alignItems:'center', alignContent:'center', justifyContent:'center', backgroundColor:'#fff'}}>
              <Icon type='AntDesign' name='home' style={{fontSize: 30, color: '#000'}} />
              <Text style={{color:'#000', fontFamily:'Roboto', fontSize:20, fontWeight:'400'}}>Inicio</Text>
            </View>

            <View style={{height: height*.1, width: 1, backgroundColor: '#CCC'}}/>
            <View style={{width: width*.5, height:height*.12, alignItems:'center', alignContent:'center', justifyContent:'center', backgroundColor:'#fff'}}>
              <Icon type='FontAwesome5' name='money-bill' style={{fontSize: 30, color: 'green'}} />
              <Text style={{color:'#aaa', fontFamily:'Roboto', fontSize:18, fontWeight:'400'}}>Gana S/ 300</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    zIndex: 0,
    width: width,
  },
  map: {
    height: height,
    width: width,
    flex: 1,
    backgroundColor:"#000",
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 80,
    backgroundColor: "transparent"
  },
  inModalContainer:{
    width:width,
    height: height*.1,
    flexDirection:'row',
    zIndex: 1,
    justifyContent:'space-between',
    alignContent:'center',
    alignItems: 'center',
  },
  containerRenderUserData: {
    alignContent:'center',
    alignItems:'center',
  },
  textUserData:{
    fontSize: 15,
    fontFamily:'Georgia, serif',
    color: "#000"

  },
  userbar:{
    flexDirection:'column', 
    alignContent:'center',
    alignItems:"center",
    justifyContent:'center',
    marginLeft:10, 
    marginTop:10, 
    marginBottom:10,
  },
});
