import React, { Component } from 'react';
import {
  View,
  Image,
  WebView,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import {  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');
const items = width*.3;
const parrafo = " Uno de los desafíos ambientales y sociales más difíciles de nuestro tiempo es la gestión de la movilidad de las personas y los bienes. En 2030, el tráfico de pasajeros superará los 80 000 millones de pasajeros-kilómetros —un aumento de 50 %— y el volumen de carga crecerá en 70 % a nivel mundial. {'\n'}En lugares de rápido crecimiento, como India, China, África al sur del Sahara y Asia sudoriental, miles de millones de personas tendrán expectativas de estilo de vida más altas y nuevas aspiraciones en materia de movilidad. Megaproyectos como la Iniciativa Un Cinturón, Una Ruta (i) conectarán a más de la mitad de la población mundial y a aproximadamente un cuarto de los bienes y servicios que se desplazan alrededor del mundo a través de vías marítimas y carreteras. A nivel mundial, se espera que el número de vehículos en las carreteras se duplique en 2050."
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Blog extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true,
      colorNew: true,
      colorPop: false
    }
  };

  handleCategory=()=>{
    if(this.state.colorNew){
      this.setState({
        colorNew: false,
        colorPop: true
      })
    }else{
      this.setState({
        colorNew: true,
        colorPop: false
      })
    }
  }
  renderCard=()=>{
    return(
      <Card style={{flex: 0, marginTop: 20, width: width*.95, elevation: 10}}>
            <CardItem cardBody>
                <Image source={require('../../assets/inicio-assets/welcome/welcome.png')} style={{height: 300, width: width*.95}}/>
            </CardItem>
            <CardItem style={{marginTop: 15}}>
                  <Left style={{marginLeft: 10}}>

                    <Thumbnail small source={require('../../assets/icons-app/pictures/avatar5.jpg')}/>
                    <Text note>Nancy Vandycke</Text>
                  </Left>
                  <Right style={{marginRight: 10}}>
                    <Text note>Hace 2 días</Text>
                  </Right>
              </CardItem>
              <CardItem style={{flexDirection:'column'}}>
              <Text
                style={{color:'#181818', fontFamily:'notoserif', fontSize: 20, fontWeight:'700', marginHorizontal: 10}}
                numberOfLines={1}>La movilidad en el siglo XXI</Text>
              <Text
                style={{color:'#aaa', fontFamily:'notoserif', fontSize: 18, marginHorizontal: 10, marginTop: 10}}
                numberOfLines={2}>{parrafo}</Text>
              </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="AntDesign" name='heart' style={{color:'#8a0303'}}/>
                  <Text style={{color:'#aaa', fontSize: 16}}>129</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="Entypo" name='pin' style={{color:'#ddd'}}/>
                </Button>
              </Right>
            </CardItem>
          </Card>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#fff', height:height*.25, width: width, alignItems:'center', elevation: 15}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              width: width,
              justifyContent:'space-between',
              alignItems: 'center',

            }}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='FontAwesome' name='close' style={{marginLeft: 30}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontFamily:'Roboto', fontSize: 22, fontWeight:'400', color:'#000'}}>Home</Text>
            <Icon name='search' style={{marginRight: 30}}/>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: width*.8,
              marginTop: 30,
              alignItems: 'center',
              alignContent:'center',
              justifyContent: 'center'
            }}>
            <TouchableWithoutFeedback
              onPress={()=> this.handleCategory()}>
            <View style={{
              backgroundColor: this.state.colorNew ? '#03BB85':'#f8f8f8',
              height: height*.07,
              alignContent: 'center',
              alignItems: 'center',
              marginRight: 15,
              width: items,
              borderRadius: items/2
            }}>
              <Text style={{color: this.state.colorNew?'#fff':'#aaa', margin: 15}}>Reciente</Text>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={()=> this.handleCategory()}>
            <View style={{
              backgroundColor: this.state.colorPop ? '#03BB85':'#f8f8f8',
              height: height*.07,
              alignContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              width: items,
              borderRadius: items/2
            }}>
              <Text style={{color: this.state.colorPop?'#fff':'#aaa', margin: 15}}>Popular</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>

        </View>
        <ScrollView>
        <TouchableWithoutFeedback
          onPress={()=> navigate("ShowEntradaBlog")}>
        {this.renderCard()}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={()=> navigate("ShowEntradaBlog")}>
        {this.renderCard()}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={()=> navigate("ShowEntradaBlog")}>
        {this.renderCard()}
        </TouchableWithoutFeedback>
        </ScrollView>

        <Icon name='md-add-circle' 
        style={{
          fontSize: 70, 
          color:'#03BB85', 
          position: 'absolute',
          marginTop: height*.9
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f0f0",
    alignItems: 'center',
    width: width,
    height: height,
    flex: 1,
  },
});