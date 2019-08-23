import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";

import movilidadx from "../../assets/uberx.png";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Centro de salud</TypeTitle>
        <TypeDescription>Nuestros conductores están esperándote</TypeDescription>

        <TypeImage source={movilidadx} />
        <TypeTitle>Movilidad MX</TypeTitle>
        <TypeDescription>Mex $50,00</TypeDescription>

        <RequestButton onPress={() => this.props.navigation.navigate("ShowMain")}>
        
          <RequestButtonText>SOLICITAR SERVICIO</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
