/** @format */
import React from "react";
import { Dimensions} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import user_Profile from './src/screens/user-profile/profile';
import Navigation from './src/comunes/stack-navigator';

const { height, width } = Dimensions.get('window');

const drawerSideMenu = createDrawerNavigator({
    Item: {
        screen: Navigation,
      }
    }, {
      contentComponent: user_Profile,
      drawerWidth: width*.8,  
  });

  const App = () => createAppContainer(drawerSideMenu);

  export default createAppContainer(drawerSideMenu);