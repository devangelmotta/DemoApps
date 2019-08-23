import React, { Component } from 'react';
import { 
  View,
  Alert,
  Modal,
  Animated,
  Keyboard,
  Dimensions, 
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Icon,
  Text,
  Form,
  Item,
  Input,
  Thumbnail,
  } from 'native-base';
var avatar = require('../../API/fake-data/fake-img/carlosgomez.jpg')
const { height, width } = Dimensions.get('window');
const wSide = width*.95;
const alto = height*.08;
const category = '#828189';
const item = '#535257';
const itemFontSize = 20
export default class Vex_Soluciones_Edit_item extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible: true,
      marginBottom: 0,
      showPassword: false,
      secureText: this.props.navigation.state.params.id==4? true: false,
      name: this.props.navigation.state.params.value,
    }
  };

  componentWillMount(){
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e => this._keyboardDidShow(e));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', e => this._keyboardDidHide(e));
}

componentWillUnmount(){
    Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow);
}

_keyboardDidShow=(e)=>{
    if(e!==null && e!==undefined){
        this.setState({
            marginBottom: e.endCoordinates.height
        }); 
    }
}
_keyboardDidHide=(e)=>{
    if(e===null&&e!==undefined){
        this.setState({
            marginBottom: 0,
        }); 
    }
}

  handlerPress=()=>{
      let { params } = this.props.navigation.state;
    this.props.navigation.navigate("ShowDatosPerfil", {id: params.id, value: this.state.name})
  }
    
  render() {
    let { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, {height: height-this.state.marginBottom}]}>
        <View style={{flexDirection:'row', alignItems: 'center', height: height*.12, backgroundColor:'#000', width: width}}>
            <TouchableWithoutFeedback
              onPress={()=> navigate("ShowMain")}>
              <Icon type='MaterialIcons' name='cancel' style={{color:'#fff', fontSize: 30, marginLeft: 20}}/>
            </TouchableWithoutFeedback>
            <Text style={{fontSize:25, color:'#fff', fontFamily:'Roboto', fontWeight:'600' ,marginLeft:30}}>{params.section}</Text>
        </View>

        <View style={{
            marginTop: height*.1, 
            width: width, 
            height: height*.1,
            alignContent: 'center', 
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Form>
                
                <Item inlineLabel style={{width: width*.8}}>
                        <Input 
                            keyboardAppearance="dark"
                            style={{borderBottomWidth:2}}
                            placeholderTextColor="#fff"
                            onChangeText={(text) =>this.setState({name: text})}
                            value={this.state.name}
                            secureTextEntry={this.state.secureText}
                            autoFocus={true}
                        />
                        {params.id==4?
                        <TouchableWithoutFeedback
                          onPress={()=> this.setState({showPassword: !this.state.showPassword, secureText: !this.state.secureText})}>
                          <Icon  name={this.state.showPassword? 'md-eye':'md-eye-off'} />
                        </TouchableWithoutFeedback> : null
                        }
                </Item>
            </Form>
        </View> 

        <TouchableWithoutFeedback 
            onPress={()=> this.handlerPress()}>
        <View style={{
            marginBottom: 40,
            backgroundColor: '#000',
            flexDirection:'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems:'center',
            height: height*.08, 
            width: width,
            marginLeft: 60,
            marginRight: 60,
        }}>
            <Text style={{
                color:'#fff', 
                fontFamily: 'Roboto',
                fontSize: 20,
                fontWeight: '100'
            }}>GUARDAR</Text>
        </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems: 'center', 
    alignContent: 'center', 
    justifyContent: 'space-between',
    width: width, 
    flex: 1,
  },
  iconRight: {
    color:'#ddd', 
    fontSize: 25, 
    fontWeight: 'bold', 
    fontFamily:'Roboto',
    marginRight: 20
  },
  title: {
    color:'#000', 
    fontSize: 18, 
    fontFamily:'Roboto'
  },
  secondaryTitle: {color:'#CCC', fontSize: 16, fontFamily: 'Roboto'},
  item: {
    flexDirection:'row', 
    marginTop: 10,
    alignItems:'center', 
    justifyContent:'space-between',
  },
  date: {
    marginTop: 20, 
    marginBottom: 10, 
    marginLeft: 20,
    fontFamily: 'Roboto', 
    fontSize: 22, 
    color:'#CCC'
  },
});