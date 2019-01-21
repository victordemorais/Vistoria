import { Box } from './../../components/Box/index'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import car from '../../../assets/imgs/carIcon.png'
import moto from '../../../assets/imgs/motoIcon.png'
import Icon from 'react-native-vector-icons/FontAwesome'
class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ position: 'absolute', top: 15, left: 15 }}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.textBackground}> Cotação </Text>
          <Text style={styles.textHeader}> Cotação </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 70,
          }}>
          <Text style={styles.textMain}>
            {'Selecione o tipo do seu veículo para realizar cotação.'.toUpperCase()}
          </Text>
        </View>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Box
            icon={car}
            style={{ width: 150, height: 150 }}
            name="carro"
            onPress={() => this.props.navigation.navigate('NewVistory')}
          />
          <Box
            icon={moto}
            style={{ width: 150, height: 150 }}
            name="Moto"
            onPress={() => this.props.navigation.navigate('NewVistory')}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop:40,
    width: '100%',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  textBackground: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 63,
    color: '#f5f5f5',
  },
  textMain: {
    width: 260,
    color: '#507BFE',
    textAlign: 'center',
  },
})

export default Menu
