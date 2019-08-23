import React from "react";
import {Dimensions} from 'react-native';
import NavigationContainer from "./comunes/stack-navigator";
import SideMenu from './components/Profile/profile';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
const { height, width } = Dimensions.get('window');

const drawerSideMenu = createDrawerNavigator({
    Item: {
        screen: NavigationContainer,
      }
    }, {
      contentComponent: SideMenu,
      drawerWidth: width*.85,  
  });
  
const App = () => createAppContainer(drawerSideMenu);

export default createAppContainer(drawerSideMenu);
