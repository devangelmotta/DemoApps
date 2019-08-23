var React = require('react');
var ReactNative = require('react-native');

var {Component} = React;

var {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View, TouchableHighlight
} = ReactNative;
const { height, width } = Dimensions.get('window');
import SignatureCapture from 'react-native-signature-capture';

export default class Vex_Soluciones_Signature extends Component {
    render() {
        return (
            <View style={{ flexDirection: "column", flex:1,height:height }}>
                <Text style={{ fontSize:20, textAlign:"center"}}>Firma requerida: </Text>
                <SignatureCapture
                    style={styles.signature}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={"portrait"}/>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight style={styles.buttonStyleSuccess}
                        onPress={() => { this.saveSign() } } >
                        
                        <Text style={styles.textButtom}>TERMINAR</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyleErase}
                        onPress={() => { this.resetSign() } } >
                        <Text style={styles.textButtom}>BORRAR</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }

    saveSign() {
        this.refs["sign"].saveImage();
    }

    resetSign() {
        this.refs["sign"].resetImage();
    }

    _onSaveEvent=(result)=> {
        //result.encoded - for the base64 encoded png
        //console.log(result.pathName)
        this.props.navigation.navigate("ShowMain")
    }
    _onDragEvent() {
         // This callback will be called when the user enters signature
        //console.log("dragged");
    }
}

const styles = StyleSheet.create({
    signature: {
        height: height*.75,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyleSuccess: {
        flex: 1, 
        margin: 10,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        backgroundColor: "#000",
        justifyContent: "center",
    },
    buttonStyleErase: {
        flex: 1, 
        margin: 10,
        height: 50,
        borderRadius: 6,
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#800040",
    },
    textButtom:{
        color:'#fff', 
        fontFamily:'Roboto',
        fontSize: 18
    }
});