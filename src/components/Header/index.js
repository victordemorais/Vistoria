import React, { Component } from 'react'
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import Icone from '../../../assets/imgs/menu.png'
import Logo from '../Logo'
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Icone} style={styles.icone} />
        </TouchableOpacity>
        <Logo size={30} fontSize={20} margin={10} style={{ marginLeft: -35 }} />
        <View />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    elevation: 2,
    backgroundColor: '#4F7BFE',
    justifyContent: 'space-between',
  },
  menuHeader: {
    margin: 10,
  },
  icone: {
    marginTop: 13,
    marginLeft: 10,
    height: 22,
    width: 30,
  },
})
export default Header
