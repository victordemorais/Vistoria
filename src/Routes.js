import React from 'react'
import { AsyncStorage } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Initial from './screens/Initial/index'
import Home from './screens/Home'
import Login from './screens/Login'
import Header from './components/Header'
import Cotation from './screens/Cotation'
import NewVistory from './screens/NewVistory'
import Register from './screens/Register'
import Term from './screens/Term'
import PhotosCar from './screens/PhotosCar'
import Finished from './screens/Finished';

const MainRoutes = {
  Initial: {
    screen: Initial,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: ({ navigation }) => <Header navigation={navigation} />,
    },
  },
  Cotation: {
    screen: Cotation,
    navigationOptions: {
      header: null,
    },
  },

  NewVistory: {
    screen: NewVistory,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
  Term: {
    screen: Term,
    navigationOptions: {
      header: null,
    },
  },
  PhotosCar: {
    screen: PhotosCar,
    navigationOptions: {
      header: null,
    },
  },
  Finished: {
    screen: Finished,
    navigationOptions: {
      header: null,
    },
  },
}
const token = AsyncStorage.getItem('token')
let initialroute = 'Initial'
// if (token) {
//   initialroute = 'Finished'
// }
const StackNavigator = createStackNavigator(MainRoutes, {
  initialRouteName: initialroute,
})
const Routes = createAppContainer(StackNavigator)

export default Routes
