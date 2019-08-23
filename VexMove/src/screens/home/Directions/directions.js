import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBKUyNSUUjZGHmH-cUfGV0rK9WSIsuenAU"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
