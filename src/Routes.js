import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Initial from './screens/Initial/index'
import Home from './screens/Home'
import Login from './screens/Login'
import Header from './components/Header'
import Cotation from './screens/Cotation'

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
  },
}
const StackNavigator = createStackNavigator(MainRoutes, {
  initialRouteName: 'Cotation',
})
const Routes = createAppContainer(StackNavigator)

export default Routes
