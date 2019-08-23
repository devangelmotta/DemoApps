import { 
    Alert,
    AsyncStorage
} from 'react-native';

export default ()=>{
    AsyncStorage.getItem('@userData:user')
            .then((value) => {
                if (value !== null && value !== undefined) {
                    return userInfo = JSON.parse(value);
                }
                else {
                    return "Error!"
                }
            }).catch((error) => {
                console.log(error)
                return "Error!"
            })
        }