import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {fromLeft, fromTop, fromBottom, zoomIn} from 'react-navigation-transitions';
// Inicio no-auth
import Login from '../inicio/login/login';
import LoginBack from '../inicio/login/login-back';
import LoginForm from '../inicio/login/login-form';
import Registro from '../inicio/registro/registro';
// Home
import Main from '../screens/home/main';
import ButtonsEndService from '../screens/home/button-end-service';
import Comentarios from '../screens/home/comentarios';
import Signature from '../screens/home/signature';
// User task
import userTask from '../screens/user-task/task';
// User profile 
import userProfile from '../screens/user-profile/profile';
import Referido from '../screens/user-profile/referidos';
import datosPerfil from '../screens//user-profile/datos-perfil';
import Avisos from '../screens/user-profile/avisos';
import HistorialCuenta from '../screens/user-profile/historial-cuenta';
import UploadProfile from '../screens/user-profile/cambiar-perfil';
import Desglose from '../screens/user-profile/desglose';
import CuentaBancaria from '../screens/user-profile/pago';
import Blog from '../screens/user-profile/blog';
import EntradaBlog from '../screens/user-profile/post-blog';
import Ajustes from '../screens/user-profile/configuracion';
import Policy from '../screens/user-profile/policy';
import itemTask from '../screens/user-task/item-task';
import EditItem from '../screens/user-profile/edit-item';
import Help from '../screens/user-profile/faq/help';
import LoginAndLogup from '../screens/user-profile/faq/inicio-y-registro';
import HowSignUp from '../screens/user-profile/faq/how-singup';
import HowSignIn from '../screens/user-profile/faq/how-signin';
import RecoveryAccount from '../screens/user-profile/faq/recovery-account'
import InfoAccount from '../screens/user-profile/faq/user-account/user-account'
import InfoUserAccount from '../screens/user-profile/faq/user-account/info-useraccount'
import ChangeCorreo from '../screens/user-profile/faq/user-account/change-email'
import ChangeName from '../screens/user-profile/faq/user-account/change-name'
import CannotLogin from '../screens/user-profile/faq/cannot-login'
// User menu
import userMenu from '../screens/options/menu';
import Historial from '../screens/options/historial';
import Support from '../screens/options/soporte';

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
    if (prevScene
    && prevScene.route.routeName === 'ShowComentarios'
    && nextScene.route.routeName === 'ShowSignature') {
    return fromBottom(600);
  }else if (prevScene
    && prevScene.route.routeName === 'ShowSignature'
    && nextScene.route.routeName === 'ShowComentarios') {
    return fromTop(600);
  }
  return fromLeft(600);
}

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
const Vex_soluciones_HomeStackNavigator = createStackNavigator(
  {
    ShowMain: { screen: Main },
    ShowButtonsEndService: {screen: ButtonsEndService},
    ShowComentarios: {screen: Comentarios},
    ShowSignature: {screen: Signature},
    ShowTask: { screen: userTask },
    ShowProfile: { screen: userProfile },
    ShowMenu: { screen: userMenu },
    ShowHistorial: {screen: Historial},
    ShowSupport: {screen: Support},
    ShowReferidos: {screen: Referido},
    ShowDatosPerfil : {screen: datosPerfil},
    ShowAvisos: {screen: Avisos},
    ShowHistorialCuenta: {screen: HistorialCuenta},
    ShowDesglose: {screen: Desglose},
    ShowUploadProfile: {screen: UploadProfile},
    ShowCuentaBancaria: {screen: CuentaBancaria},
    ShowBlog: {screen: Blog},
    ShowEntradaBlog: {screen: EntradaBlog},
    ShowAjustes: {screen: Ajustes},
    ShowPolicy: {screen: Policy},
    ShowItemTask: {screen: itemTask},
    ShowEditItem: {screen: EditItem},
    ShowHelp: {screen: Help},
    ShowLoginAndLogup: {screen: LoginAndLogup},
    ShowHowSignUp: {screen: HowSignUp},
    ShowHowSignIn: {screen: HowSignIn},
    ShowCannotLogin: {screen: CannotLogin},
    ShowRecoveryAccount: {screen: RecoveryAccount},
    ShowInfoAccount: {screen: InfoAccount},
    ShowChangeCorreo: {screen: ChangeCorreo},
    ShowChangeName: {screen: ChangeName},
    ShowInfoUserAccount: {screen: InfoUserAccount},

  },

  {
    initialRouteName: 'ShowMain',
    headerMode: 'none',
    transitionConfig: () => fromLeft(600),
  },
);


const Vex_soluciones_SwitchRoutes = createSwitchNavigator(
  {
    Auth: Vex_soluciones_LoginStackNavigator,
    App: Vex_soluciones_HomeStackNavigator,
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none', 
    transitionConfig: () => zoomIn(),
  }
);

//const NavigatorContainer = createAppContainer(Vex_soluciones_SwitchRoutes);

export default Vex_soluciones_SwitchRoutes;


//<Icon type='AntDesign' name='home' style={{fontSize: 25, color: '#000'}} />