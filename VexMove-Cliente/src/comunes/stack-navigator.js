import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {fromLeft, fromTop, fromBottom, zoomIn} from 'react-navigation-transitions';
import { Text, Icon, Button } from 'native-base';
// Inicio no-auth
import Login from '../inicio/login/login';
import LoginBack from '../inicio/login/login-back';
import LoginForm from '../inicio/login/login-form';
import Registro from '../inicio/registro/registro';
// Home
import Main from '../components/Map/main';
import Details from '../components/Details/details';
import Directions from '../components/Directions/directions';
import Search from '../components/Search/search';
import User from '../components/Profile/profile';
import Detail from '../components/Details/details';
// User profile 
import TusViajes from '../components/Profile/misViajes/mis-viajes';
import Ayuda from '../components/Profile/Ayuda/ayuda';
import Pago from '../components/Profile/Pago/pago';
import ViajesGratis from '../components/Profile/viajeGratis/viajes-gratis';
import Configuracion from '../components/Profile/Configuración/configuracion';

const Vex_soluciones_LoginStackNavigator = createStackNavigator(
  {
    ShowLogin: { screen: Login },
    ShowLoginBack: {screen: LoginBack},
    ShowLoginForm: {screen: LoginForm},
    ShowRegistro: {screen: Registro},
  },
  {
    initialRouteName:'ShowLogin',
    headerMode: 'none', 
  }
);
// Hone
const Vex_soluciones_InicioStackNavigator = createStackNavigator(
  {
    ShowMain: { screen: Main },
    ShowDetails: {screen: Details},
    ShowDirection: {screen: Directions},
    ShowSearch: {screen: Search},
    ShowUser: {screen: User},
    ShowTusViajes: {screen: TusViajes},
    ShowAyuda: {screen: Ayuda},
    ShowPago: {screen: Pago},
    ShowViajesGratis: {screen: ViajesGratis},
    ShowConfiguracion: {screen: Configuracion},
    ShowDetail: {screen: Detail}
  },
  {
    initialRouteName: 'ShowMain',
    headerMode: 'none',
    transitionConfig: () => fromLeft(600),
  },
);

// User profile
// const Vex_soluciones_User_Profile_StackNavigator = createStackNavigator(
//   {
//     ShowProfile: { screen: userProfile },
//   },
//   {
//     initialRouteName: 'ShowProfile',
//     headerMode: 'none',
//     transitionConfig: () => fromLeft(),
//   },
// );

const Vex_soluciones_SwitchRoutes = createSwitchNavigator(
  {
    Auth: Vex_soluciones_LoginStackNavigator,
    App: Vex_soluciones_InicioStackNavigator,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none', 
    transitionConfig: () => zoomIn(),
  }
);

//const NavigatorContainer = createAppContainer(Vex_soluciones_SwitchRoutes);

export default Vex_soluciones_SwitchRoutes;