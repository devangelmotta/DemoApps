import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyC6mWJ3eS3q0JFT4zqSxTT8J7hmoJCMrAY"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
