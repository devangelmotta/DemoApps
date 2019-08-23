import url from '../endpoints/url';
import { 
    Alert,
} from 'react-native';

export default (name, apellido, email, password, password_confirmation, number_phone) =>{
    fetch(url.inicio.registro, {
        method: 'POST',
        headers: {
            'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng',
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            name: name,
            apellido: apellido,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            celular: number_phone
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson !== undefined && responseJson !== null && responseJson.status !== false) {
                Alert.alert("Registro ok: ", + JSON.stringify(responseJson))
            }
            else {
                this.setState({ msgerror: responseJson.message })
                alert("ResponseJson es undefined ")
            }
        })
        .catch((error) => {
            alert(error);
        })
        .done();
}
 