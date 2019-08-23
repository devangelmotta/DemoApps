import React, { Component } from 'react';
import {
  Text, 
  View,
  Alert,
  Image,
  Animated,
  Dimensions, 
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { 
  Icon,
  Left,
  Card,
  Body,
  Title,
  Header, 
  Button,
  CardItem,
  Content, 
  Container,
} from "native-base";
const { height, width } = Dimensions.get('window');

var data= [];
export default class Vex_Soluciones_Support extends Component {
  constructor(props){
    super(props);

    this.state={
      loadAccordion: false
    }
  };



    componentDidMount(){
          }

    
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor:"#F5F5F5", flex:1, height:height}}>
        <View style={{marginLeft: 20, marginTop: 20}}>
            <TouchableWithoutFeedback
                
                onPress={()=> this.props.navigation.goBack()}>
                <Icon name='arrow-back' style={{fontSize:30, color:"#CCC"}}/>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                Contactenos para resolver inquietudes, quejas o reclamos.
            </Text>
        </View>

        <View>
            <Card>
                <CardItem>
                    <Body style={styles.body}>
                        <View>
                            <Icon type="SimpleLineIcons" name="earphones-alt" style={{color:"#282828"}} />
                        </View>
                        <View>
                            <Text style={styles.textBody}>
                                Contacta con uno de nuestros técnicos
                            </Text>
                        </View>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Body style={styles.body}>
                        <View>
                            <Icon type="FontAwesome5" name="whatsapp" style={{color:"#282828"}} />
                        </View>
                        <View style={{marginLeft: 30}}>
                            <Text style={styles.textBody}>
                                Escríbenos al WhatsApp
                            </Text>
                        </View>
                        
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Body style={styles.body}>
                        <View>
                            <Icon type="MaterialCommunityIcons" name="email-outline" style={{color:"#282828"}} />
                        </View>
                        <View style={{marginLeft: 30}}>
                            <Text style={styles.textBody}>
                                Envíanos un e-mail
                            </Text>
                        </View>  
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Body style={{alignContent:"center", alignItems: "center"}}>
                        <View style={{flexDirection:"row", alignContent:"center", alignItems:"center", justifyContent:"center"}}>
                            <Text style={styles.textBody}>O visita uno de nuestros centros</Text>
                        </View> 
                        <View style={{alignContent:"center", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                            <View style={{marginTop:20}}>
                                <Icon type="FontAwesome5" name="hospital-alt" style={{color:"#282828"}} />
                            </View>
                            <View style={{marginTop:10}}>
                                <Text style={{fontSize:20, textAlign:"center"}}>Avenida Ejército Nacional 843,</Text>
                                <Text style={{fontSize:20, textAlign:"center"}}>Miguel Hidalgo, Granada,</Text>
                                <Text style={{fontSize:20, textAlign:"center"}}>11520 Ciudad de México, CDMX.</Text>
                            </View>
                        </View>
                        
                    </Body>
                </CardItem>
            </Card>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent:"center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textTitle: {
      fontSize:25,
      color: "#181818",
      textAlign:"center"
  },
  boxTitle: {
      width:width,
      height: height*.2,
      flexDirection: "row",
      justifyContent:"space-around",
      alignContent:"center",
      alignItems:"center"

     },

     body:{
         flexDirection:"row",
         alignContent:"center",
         alignItems: "center",
     },
     textBody: {
         fontSize: 20,
         color: "#202020",
         textAlign:"center",
         textShadowColor:"#303030",
         textShadowRadius: 2, 
     },
     textDirection: {
        fontSize: 20,
        color: "#181818",
        fontFamily:"sans-serif-light"
     },

});
