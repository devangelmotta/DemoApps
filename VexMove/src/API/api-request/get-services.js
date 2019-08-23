import url from '../endpoints/url';
import { 
    Alert,
} from 'react-native';
export default (token) =>{
    fetch(url.getServices.endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json,text/html',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer '+token
        },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.length) {
                var test = responseJson.map((item, index)=>{
                    return(
                        { title: "Nombre: "+item.cliente.nombre+" Celular: "+item.cliente.celular, content: "Lorem ipsum dolor sit amet" }
                    )
                })
            }
            else {
                Alert.alert("ResponseJson es undefined ", JSON.stringify(responseJson))
            }
    
        })
        .catch((error) => {
            alert("> Error " + error);
        })
        .done();
    
}