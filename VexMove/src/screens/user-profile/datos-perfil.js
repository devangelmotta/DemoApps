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
export default class Vex_Soluciones_Datos_perfil extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true,
      changepass: "Cambiar contraseña",
      changeName: "Cambiar nombre",
      changeMail: "Cambiar mi email",
      changePass: "Cambiar mi contraseña",
      changePhone: "Cambiar mi número teléfonico",
      nombre: "Leonard Norman Cohen",
      correo: "leonard_cohen@gmail.com",
      phone: "321 1234567",
      pass: "",

    }
  };

  componentWillReceiveProps(){
    let { params } = this.props.navigation.state;
    if(params){
      switch (params.id) {
        case 1:
          this.setState({
            nombre: params.value
          })
          break;
        case 2:
          this.setState({
            correo: params.value
          })
          break;
        case 3:
          this.setState({
            phone: params.value
          })
          break;
        default:
          break;
      }
    }
  }
  componentDidUpdate(){
  }
    
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#000', fontSize: 30, marginLeft: 20, marginTop: 20}}/>
            </TouchableWithoutFeedback>
        </View>

        <View style={{width: width, height: height*.2, alignContent: 'center', alignItems: 'center', marginTop: 30}}>
          <Thumbnail square 
                style={{height: 120, width: 120}}
                source={require('../../assets/icons-app/profile.jpg')}/>
          <Text style={{color: '#181818', fontSize: 25, marginTop: 20}}>{this.state.nombre}</Text>
        </View>
        <Text style={{fontSize: 20, fontFamily:'Roboto', color:'#909090', marginLeft: 20, marginTop: 50, fontWeight:'400'}}>PERSONAL</Text>
        <View style={styles.card}>
            <View style={styles.cardItem}>
                <Text style={styles.item}>Cambiar perfil</Text>
                <TouchableWithoutFeedback
                  style={{width:50, height: 50, alignContent: 'center', alignItems: 'center', justifyContent:'center'}}
                  onPress={()=> navigate("ShowEditItem", {id: 1, value: this.state.nombre, section: this.state.changeName})}>
                    <Icon name='ios-arrow-forward' style={styles.iconRight}/>
                </TouchableWithoutFeedback>
                </View><View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>

            <View style={styles.cardItem}>
                <Text style={styles.item}>Correo</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{
                  fontSize: 15, 
                  fontFamily: 'Roboto', 
                  color:'#CCC', 
                  marginRight: 10
                  }}>{this.state.correo}</Text>

                <TouchableWithoutFeedback
                onPress={()=> navigate("ShowEditItem", {id: 2, value: this.state.correo, section: this.state.changeMail})}
                style={{width:50, height: 50, alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
                <Icon name='ios-arrow-forward' style={styles.iconRight}/>
                </TouchableWithoutFeedback>
                </View>
            </View><View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>

            <View style={styles.cardItem}>
                <Text style={styles.item}>Número de celular</Text>
                <TouchableWithoutFeedback
                onPress={()=> navigate("ShowEditItem", {id: 3, value: this.state.phone, section: this.state.changePhone})}
                style={{width:50, height: 50, alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
                <Icon name='ios-arrow-forward' style={styles.iconRight}/>
                </TouchableWithoutFeedback>

            </View><View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>

            <View style={styles.cardItem}>
                <Text style={styles.item}>Cambia tu contraseña</Text>
                <TouchableWithoutFeedback
                onPress={()=> navigate("ShowEditItem", {id: 4, value: this.state.pass, section: this.state.changePass})}
                style={{width:50, height: 50, alignContent: 'center', alignItems: 'center', justifyContent:'center'}}>
                <Icon name='ios-arrow-forward' style={styles.iconRight}/>
                </TouchableWithoutFeedback>
            </View><View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>
        </View>

        <Text style={{fontSize: 20, fontFamily:'Roboto', color:'#909090', marginLeft: 20, marginTop: 30}}>DOCUMENTOS</Text>
        <View style={[styles.card, {marginTop: 15}]}>
          <View style={styles.cardItem}>
                  <Text style={styles.item}>ACTUALIZAR SOAT</Text>
                  <Icon name='ios-arrow-forward' style={styles.iconRight}/>
          </View><View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>
          <View style={styles.cardItem}>
                  <Text style={styles.item}>Actualizar Antecedentes</Text>
                  <Icon name='ios-arrow-forward' style={styles.iconRight}/>
          </View> 
          <View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>
        </View>

        <Text style={{fontSize: 20, fontFamily:'Roboto', color:'#909090', marginLeft: 20, marginTop: 30}}>ESTADÍSTICAS</Text>
        <View style={[styles.card, {marginTop: 15}]}>

          <View style={[styles.cardItem, {height: height*.15}]}>
          
                  <View>
                    <Text style={styles.item}>Tu evaluación</Text>
                    <Text style={{
                    fontSize: 16, 
                    fontFamily: 'Roboto', 
                    color:'#CCC', 
                    marginTop: 10
                    }}>(100 últimos viajes)</Text>
                  </View>
                  <Text style={{color:'#000', fontFamily:'Roboto', fontWeight: '600', marginRight: 20, fontSize: 16}}>4.66</Text>

          </View><View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>

          <View style={{ width: width, alignItems:'center'}}>

                  <View style={[styles.cardItem, {height:height*.15}]}>
                    <Text style={styles.item}>Total de calificaciones</Text>

                    <Text style={{
                      color:'#000', 
                      fontFamily:'Roboto', 
                      fontWeight: '600', 
                      marginRight: 20, 
                      fontSize: 16,
                      }}>145</Text>
                  </View>
                  <View style={{borderTopColor:'#CCC', borderTopWidth:0.5, width: width*.9}}/>

                    <View style={styles.containerIndices}>
                        <View style={styles.rowStar}>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Text style={{color:'#000', fontSize: 16, marginLeft: 15, fontFamily:'Roboto'}}>724</Text>
                        </View>
                        <View style={styles.bar}>
                          <View style={[styles.barIndicatorA, {width: 180}]}/>
                          <View style={[styles.barIndicatorB, {width: 10}]}/>
                        </View>
                    </View>

                    <View style={styles.containerIndices}>
                        <View style={styles.rowStar}>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#CCC', fontSize: 15}}/>
                          <Text style={{color:'#000', fontSize: 16, marginLeft: 15, fontFamily:'Roboto'}}>468</Text>
                        </View>
                        <View style={styles.bar}>
                          <View style={[styles.barIndicatorA, {width: 170}]}/>
                          <View style={[styles.barIndicatorB, {width: 20}]}/>
                        </View>
                    </View>
                    <View style={styles.containerIndices}>
                        <View style={styles.rowStar}>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#CCC', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#CCC', fontSize: 15}}/>
                          <Text style={{color:'#000', fontSize: 16, marginLeft: 15, fontFamily:'Roboto'}}>6   </Text>
                        </View>
                        <View style={styles.bar}>
                          <View style={[styles.barIndicatorA, {width: 8}]}/>
                          <View style={[styles.barIndicatorB, {width: 182}]}/>
                        </View>
                    </View>
                    <View style={styles.containerIndices}>
                        <View style={styles.rowStar}>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Text style={{color:'#000', fontSize: 16, marginLeft: 15, fontFamily:'Roboto'}}>2   </Text>
                        </View>
                        <View style={styles.bar}>
                          <View style={[styles.barIndicatorA, {width: 3}]}/>
                          <View style={[styles.barIndicatorB, {width: 187}]}/>
                        </View>
                    </View>
                    <View style={styles.containerIndices}>
                        <View style={styles.rowStar}>
                          <Icon type='Entypo' name='star' style={{color:'#000', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Icon type='Entypo' name='star' style={{color:'#ccc', fontSize: 15}}/>
                          <Text style={{color:'#000', fontSize: 16, marginLeft: 15, fontFamily:'Roboto'}}>1   </Text>
                        </View>
                        <View style={styles.bar}>
                          <View style={[styles.barIndicatorA, {width: 2}]}/>
                          <View style={[styles.barIndicatorB, {width: 188}] }/>
                        </View>
                    </View>
                  
          </View> 
        </View>
        <View style={styles.secondaryCard}>
          <Text style={styles.itemLeft}>Viajes en este mes</Text>
          <Text style={styles.itemRight}>35</Text>
        </View>

        <View style={styles.secondaryCard}>
          <Text style={styles.itemLeft}>Historial de viajes completos</Text>
          <Text style={styles.itemRight}>35</Text>
        </View>

        <View style={styles.secondaryCard}>
          <Text style={styles.itemLeft}>Favoritos</Text>
          <Text style={styles.itemRight}>9</Text>
        </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f0f0",
    width: width
  },

  item: {
    fontSize: 16, 
    fontFamily: 'Roboto', 
    fontWeight:'100', 
    color:'#000', 
    marginLeft: 20
    },
  iconRight: {
    color:'#ccc', 
    fontSize: 25, 
    marginRight: 20
  },
  bar: {
    flexDirection:'row', 
    alignItems:'center', 
    marginLeft: 15
  },
  containerIndices: {
    flexDirection:'row', 
    alignItems:'center', 
    width: width, 
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 10, 
    marginBottom: 10
  },
  card: {
    width: width, 
    alignItems: 'center', 
    backgroundColor:'#fff', 
    elevation: 1, 
    //borderBottomWidth: 0.5, 
    //borderBottomColor:'#CCC', 
    marginTop: 20
  },
  cardItem: {
    height: height*.1, 
    width: width, 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  secondaryCard: {
    elevation: 3,
    height: height*.1,
    marginTop: 20,
    width: width,
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  itemLeft: {
    color:'#000', 
    fontSize: 20, 
    fontFamily:'Roboto', 
    marginLeft:10
  },
  itemRight: {
    color:'#000', 
    fontSize: 18, 
    fontFamily:'Roboto', 
    fontWeight:'500', 
    marginRight: 20
  },
  rowStar: {
    flexDirection:'row', 
    alignItems:'center', 
    marginLeft: 20
  },
  barIndicatorA: {
    backgroundColor: '#000',
    height: 2
  },
  barIndicatorB: {
    backgroundColor: '#CCC',
    height: 2
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: width,
    height: height*.05,
  },
})