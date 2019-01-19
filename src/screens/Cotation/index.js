import { Box } from './../../components/Box/index'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import car from '../../../assets/imgs/carIcon.png'
import moto from '../../../assets/imgs/motoIcon.png'
class Cotation extends Component {
  render() {
    return (
      <View style={styles.container}>
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
            onPress={() => alert('OI')}
          />
          <Box icon={moto} style={{ width: 150, height: 150 }} name="Moto" />
        </View>
        <View>
          <Text> OI </Text>
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

export default Cotation
