import SignatureCapture from 'react-native-signature-capture';
import React, { Component } from 'react';
import { 
  Text,
  View,
  Alert,
  Modal,
  Animated,
  ScrollView,
  Dimensions, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import {
    Form,
    Toast,
    Header, 
    Button,
    Content, 
    Textarea, 
    Container, 
    } from 'native-base';
const { height, width } = Dimensions.get('window');
export default class Vex_Soluciones_Comentarios extends Component {
  constructor(props){
    super(props);
    this.state={
      text: undefined,
    }

  };
  
  handlerNavigation=()=>{
    this.props.navigation.navigate("ShowSignature")
  }
  
  render() {
    let {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
          <ScrollView
            scrollEnabled={false}
            keyboardShouldPersistTaps={"always"}>
            <Content padder>
                <Form>
                    <Textarea rowSpan={10} bordered placeholder="Escriba aquí sus observaciones y comentarios..." 
                    autoFocus={true}
                    onChangeText={(text)=> this.setState({comentario: text})}/>
                </Form>
                <Button block bordered success
                onPress={()=> this.handlerNavigation()}><Text>ENVIAR COMENTARIOS</Text></Button>
            </Content>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    zIndex:0,
    height: height,
    width:width,
    backgroundColor:"#fff",
  },
});