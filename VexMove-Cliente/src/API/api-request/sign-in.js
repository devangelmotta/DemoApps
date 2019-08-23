import url from '../endpoints/url';
import { 
    Alert,
    AsyncStorage
} from 'react-native';
import NavigationService from '../../comunes/exo-navigation';
export default async (_email, _password) =>{
    fetch(url.inicio.login, {
        method: 'POST',
        headers: {
            'Accept': 'application/json,text/html',
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
            email: _email,
            password: _password,
            remember_me: 1,
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.access_token !==undefined && responseJson.access_token!==null) {
                NavigationService.navigate("App");
                saveUserLocalStorage(responseJson)
            }
            else {
                alert("ResponseJson es undefined " + JSON.stringify(responseJson))
            }
    
        })
        .catch((error) => {
            Alert.alert(">Error " + error)
        })
    }

export async function saveUserLocalStorage(responseJson){
    AsyncStorage.setItem('@userData:user', JSON.stringify(responseJson)).then((response) => {
        if(response !== null && response !== undefined){
            console.log('>>>>> User in local storage desde getListUser <<<<<')
        }
    }).catch((error) => {
        console.log(">>>>> Error al guardar setUserLocalStorage en getListProfiles<<<<<<", error)
        return false;
    })
    .done(() =>{
        return true;
    })
}