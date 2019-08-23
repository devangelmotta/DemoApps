import React, { Component } from 'react';
import { 
  View,
  Image,
  Animated,
  Dimensions, 
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Icon,
  Text,
  Thumbnail
  } from 'native-base';
import styled from 'styled-components'
const { height, width } = Dimensions.get('window');
const marginBox= height*.05;
var avatar = 0;

export default class Vex_Soluciones_Carmbiar_perfil extends Component {
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
        <ImageBackground
            style={{width: width, height: height*.5}}
            source={require('../../assets/icons-app/icons/gradient.png')}>

            <View style={{
                width: width, 
                height: height*.5,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent:'space-between',
            }}>
                <Thumbnail 
                    style={{marginTop: 60, height:120, width: 120, borderRadius: 60}}
                    source={require('../../assets/icons-app/pictures/avatar0.jpg')}
                />
                <Text style={{
                    color:'#eee',
                    fontFamily:'Roboto',
                    fontWeight:'100',
                    fontSize: 25,
                    marginBottom: 40
                }}>Ana Sofía Henao</Text>
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 40,
                    width: width*.9,
                    marginHorizontal: 30,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                }}>
                    
                    <View style={{
                        alignItems: 'center', 
                        alignContent: 'center',
                        marginLeft: 30,
                        marginVertical: 5,
                    }}>
                        <Icon type='Entypo' name='star' style={{color:'#5D26C1', fontSize: 20}}/>
                        <Text style={{color:'#aaa', fontSize:18, fontFamily:'Roboto', marginTop:5}}>4.5</Text>
                    </View>

                    <View style={{
                        alignItems: 'center', 
                        alignContent: 'center',
                        marginVertical: 5,
                    }}>
                        <Icon name='ios-calendar' style={{color:'#5D26C1', fontSize: 20}}/>
                        <Text style={{color:'#aaa', fontSize:18, fontFamily:'Roboto', marginTop:5}}>21/3</Text>
                    </View>

                    <View style={{
                        alignItems: 'center', 
                        alignContent: 'center',
                        marginRight: 30,
                        marginVertical: 5,
                    }}>
                        <Icon type='EvilIcons' name='clock' style={{color:'#5D26C1', fontSize: 22}}/>
                        <Text style={{color:'#aaa', fontSize:18, fontFamily:'Roboto', marginTop:5}}>25 Min</Text>
                    </View>                    
                </View>
            </View>

        </ImageBackground>
        <ScrollView>
        <View style={{
            height: height*.5, 
            width: width, 
            zIndex: 1
        }}>
            <View style={styles.divider}/>
            
            <View style={[styles.itemCircle, {marginTop: marginBox}]}>
                <View style={styles.circle}/>
                <View
                    style={styles.boxItem}>
                    <Icon name='ios-calendar' style={{color:'#181818', fontSize: 20, marginLeft: 20}}/>
                    <Text style={{color:'#181818', fontFamily: 'Roboto', fontSize: 20, fontWeight:'100', marginLeft: 15}}>Lun 2, Marzo. 4:00 PM</Text>
                </View>
            </View>

            <View style={[styles.itemCircle, {marginTop: marginBox*3}]}>
                <View style={styles.circle}/>
                <View
                    style={styles.boxItem}>
                    
                    <Icon type='MaterialCommunityIcons' name='ray-start-arrow' style={{color:'#181818', fontSize: 20, marginLeft: 20}}/>
                    <Text style={{color:'#181818', fontFamily: 'Roboto', fontSize: 20, fontWeight:'100', marginLeft: 15}}>Origen: Cll 21N #7a-19</Text>
                </View>
            </View>

            <View style={[styles.itemCircle, {marginTop: marginBox*5}]}>
                <View style={styles.circle}/>
                <View
                    style={styles.boxItem}>
                    <Icon type='Entypo' name='location-pin' style={{color:'#181818', fontSize: 20, marginLeft: 20}}/>
                    <Text style={{color:'#181818', fontFamily: 'Roboto', fontSize: 20, fontWeight:'100',marginLeft: 15}}>Clínica María Magdalena</Text>
                </View>
            </View>
            <TouchableWithoutFeedback
              onPress={()=> this.props.navigation.navigate("ShowMain")}>
            <View style={[styles.itemCircle, {marginTop: marginBox*7}]}>
                <View style={styles.circle}/>
                <View
                    style={styles.boxItemStart}>
                    <Text style={{color:'#fff', fontFamily: 'Roboto', fontSize: 20, fontWeight:'100'}}>INICIAR SERVICIO</Text>
                </View>
            </View>
            </TouchableWithoutFeedback>


        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: 'center',
    width: width, 
    height: height,    
  },
  rowStar: {
    flexDirection:'row', 
    alignItems:'center', 
    marginLeft: 10
  },
  divider: {
    marginVertical: height*.05,
    marginLeft: 40,
    height: height*.4, 
    width: 1,
    backgroundColor: '#000'
},
circle: {
width: 15, 
height: 15, 
borderRadius: 15/2, 
backgroundColor: '#000'
},
itemCircle: {
    zIndex: 2,
    position: 'absolute',
    alignItems: 'center',
    width: width,
    marginLeft: 32.5,
    flexDirection: 'row'
},
boxItem: {
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  width: width*.8,
  height: height*.08, 
  elevation: 1,
  borderBottomColor: '#fff', 
  marginLeft: 10
},
boxItemStart: {
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  width: width*.8,
  height: height*.08, 
  elevation: 1,
  backgroundColor: '#000',
  marginLeft: 10,
}
});