import React from 'react';
import { 
    
    Alert,
    Dimensions, 
    StyleSheet, 
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import sendDataRegister from '../../API/api-request/sign-up';
import validate from '../../comunes/ValidatetextInput';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    Container: {
        height: height,
        marginBottom: 20,
        flex: 1,
        backgroundColor: '#ccc',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    containerFrom: {
        marginBottom: 40
    },
    secondaryText: {
        fontSize: 15,
        color: 'black',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign:'center'
    },
    footerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    txtInput: {
        fontSize: 18,
        height: 40,
        paddingLeft: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
});


class Vex_soluciones_Registro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            nombres: '',
            email: '',
            email2: '',
            pass: '',
            pass2: '',
            tel: '',
            cod: '',
            msgerror: ''
        };
    }

    validateform() {
        if (this.state.email == "" || this.state.email2 == "" || this.state.nombres == "" || this.state.pass == "" || this.state.tel == "") {
            alert("Por favor ingrese los datos Requeridos")
        } else {
            if (validate.isemailvalid(this.state.email) == true &&
                // validate.isthesameemail(this.state.email, this.state.email2) == true &&
                validate.isthesamepassword(this.state.pass, this.state.pass2)
            ) {
                if (this.state.checked === true) {
                    sendDataRegister(this.state.nombres,this.state.apellido,this.state.email,this.state.pass,this.state.pass,this.state.tel)
                } else {
                    alert("No puedes continuar si no aceptas los términos y condiciones")
                }
            } else {
                alert("Revisa que Email y Password sean los correctos")
            }
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre</Label>
                            <Input inlineLabel/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Apellido</Label>
                            <Input inlineLabel/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Email</Label>
                            <Input inlineLabel/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Contraseña</Label>
                            <Input inlineLabel/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Confirmar contraseña</Label>
                            <Input inlineLabel/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Celular</Label>
                            <Input inlineLabel/>
                        </Item>
                    </Form>
                    <Button 
                        onPress={()=> this.validateform()}
                    light><Text>Regístrate</Text></Button>
                </Content>
            </Container>
        );
    }
}
export default Vex_soluciones_Registro;