import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonRounded from '../../components/ButtonRounded'

class Finished extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="check" size={200} color="#fff" />
        <View style={{ width: 240 }}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#fff',
            }}>
            Concluído
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#fff',
              marginTop: 10,
            }}>
            Você acabou de enviar a vistoria do seu veículo
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: '#fff',
              marginTop: 10,
            }}>
            Acompanhe o status da vistoria pela Home do app.
          </Text>
        </View>
        <View style={{ width: '70%' }}>
          <ButtonRounded
            title="Ir para Home"
            isSelected
            isSelectedColorFont={'#4F7BFE'}
            isSelectedColor={'#fff'}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F7BFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Finished
