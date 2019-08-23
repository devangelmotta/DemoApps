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
const parrafo = "Uno de los desafíos ambientales y sociales más difíciles de nuestro tiempo es la gestión de la movilidad de las personas y los bienes. En 2030, el tráfico de pasajeros superará los 80 000 millones de pasajeros-kilómetros —un aumento de 50 %— y el volumen de carga crecerá en 70 % a nivel mundial. \n \n En lugares de rápido crecimiento, como India, China, África al sur del Sahara y Asia sudoriental, miles de millones de personas tendrán expectativas de estilo de vida más altas y nuevas aspiraciones en materia de movilidad. Megaproyectos como la Iniciativa Un Cinturón, Una Ruta (i) conectarán a más de la mitad de la población mundial y a aproximadamente un cuarto de los bienes y servicios que se desplazan alrededor del mundo a través de vías marítimas y carreteras. A nivel mundial, se espera que el número de vehículos en las carreteras se duplique en 2050."
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
      <Card style={{flex: 0, marginTop: 20, width: width, elevation: 15}}>
            <CardItem cardBody>
                <Image source={require('../../assets/inicio-assets/welcome/welcome.png')} style={{height: 500, width: width}}/>
            </CardItem>
            <CardItem style={{marginTop: 15}}>
                  <Left style={{marginLeft: 10}}>

                    <Thumbnail small source={require('../../assets/icons-app/pictures/avatar5.jpg')}/>
                    <Text note style={{fontSize: 18}}>Nancy Vandycke</Text>
                  </Left>
                  <Right style={{marginRight: 10}}>
                    <Text note>Hace 2 días</Text>
                  </Right>
              </CardItem>
              <CardItem style={{flexDirection:'column'}}>
              <Text
                style={{color:'#181818', fontFamily:'notoserif', fontSize: 22, fontWeight:'700', marginHorizontal: 10}}
                numberOfLines={1}>La movilidad en el siglo XXI</Text>
              <Text
                style={{color:'#aaa', fontFamily:'notoserif', fontSize: 20, marginHorizontal: 10, marginTop: 10}}>{parrafo}</Text>
              </CardItem>
            <CardItem>

              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="Entypo" name='pin' style={{color:'#aaa', fontSize: 30}}/>
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
        <View style={{
             
            height:height*.1, 
            width: width, 
            elevation: 15, 
            flexDirection:'row',
            alignItems:'center', 
            backgroundColor:'#fff',
            justifyContent:'space-between'
            }}>
            <TouchableWithoutFeedback
                onPress={()=> this.props.navigation.goBack()}>
                <Icon  name='arrow-back' style={{marginLeft: 30}}/>
            </TouchableWithoutFeedback>
            <View style={{flexDirection:'row', alignItems: 'center', marginRight:30}}>
                <Icon type="Entypo" name='pin' style={{color:'#ddd', fontSize: 25, marginRight: 15}}/>
                <View style={{height: 20, width: 1, backgroundColor: '#aaa', marginRight: 15}}/>
                <Icon type="AntDesign" name='sharealt' style={{color:'#aaa', fontSize: 25, marginRight: 15}}/>
            </View>
        </View>

        <ScrollView>
        {this.renderCard()}
        </ScrollView>
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