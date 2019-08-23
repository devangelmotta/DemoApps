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
  Thumbnail
  } from 'native-base';
var avatar = require('../../API/fake-data/fake-img/carlosgomez.jpg')
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Desglose extends Component {
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
        <View style={{flexDirection:'row', alignItems: 'center', height: height*.1, backgroundColor:'#fff', elevation: 2}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#000', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:20, color:'#000', fontFamily:'Roboto', fontWeight:'600', marginLeft:20}}
              >HISTORIAL DE LA CUENTA
            </Text>
        </View>
        <ScrollView>
        <View style={{height: height*.08, width: width, flexDirection:'row', alignItems:'center', marginTop: 8, backgroundColor: '#fff', elevation: 2}}>
          <Icon name='arrow-back' style={{color:'#000', fontSize: 30, marginLeft: 20}}/>
          <Text style={{color:'#000', fontFamily:'Roboto', fontSize: 16, fontWeight:'400', marginLeft: 40}}>Transaciones por semana</Text>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center', marginTop: 40}}>
          <View style={styles.itemSecondary}></View>
          <View style={styles.secItemSecondary}>
            <Text style={{color:'#000', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400'}}
              >Transaciones de cuenta
            </Text>
          </View>
          <View style={styles.secItemSecondary}>
            <Text style={{color:'#000', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', marginLeft: 5}}
                >Balance actual
              </Text>
          </View>
        </View>

        <View style={{backgroundColor: '#828189', height: height*.09, width: width}}>
          <Text style={{color:'#fff', fontFamily:'Roboto', fontSize: 16, marginLeft: 30, margin: 5}}>Semana 10/03-16/03</Text>
          <Text style={{color:'#fff', fontFamily:'Roboto', fontSize: 16, marginLeft: 30, margin: 5}}>VIAJES</Text>
        </View>

        <View style={{backgroundColor: '#b0b0b0', width: width, height: height*.04, flexDirection: 'row', alignItems:'center'}}>
          <Text style={{color:'#fff', fontFamily: 'Roboto', fontSize: 14, marginLeft: 10}}>MIERCOLES 11</Text>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.item}>
            <Text style={styles.primaryItem}
              >19: 45</Text>
            <Text numberOfLines={1}
            style={styles.textItem}
            >Calle 21, Distrito de Lima 15012</Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
              > S / 10.11
            </Text>
          </View>
          <View style={styles.secItem}>
            <Text style={styles.textSecItem}
                >S / 22.00
              </Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ccc",
    width: width, 
    height: height,
  },

  item: {
    borderBottomWidth: 0.5, 
    borderBottomColor: '#181818',
    margin: 5,
    height: height*.1, 
    width: width*.6
  },
  secItem: {
    borderLeftWidth: 0.5, 
    borderLeftColor: '#181818',
    borderBottomWidth: 0.5, 
    borderBottomColor: '#181818',
    flexDirection: 'row', 
    alignItems: 'center', 
    height: height*.1, 
    width: width*.2,
  },
  itemSecondary: {
    flexDirection: 'row', 
    alignItems: 'center', 
    height: height*.1, 
    width: width*.6
  },
  secItemSecondary: {
    flexDirection: 'row', 
    alignItems: 'center', 
    height: height*.1, 
    width: width*.2,
  },
  textItem: {
    color:'#000',
    fontFamily: 'Roboto', 
    fontSize: 16, 
    width: width*.5,
    margin: 5
  },
  primaryItem: {
    color:'#000',
    fontFamily: 'Roboto', 
    fontSize: 18
  },
  textSecItem: {
    color:'#000', 
    fontSize: 16, 
    margin: 5,
    fontFamily: 'Roboto', 
    fontWeight: '400'
  }
});