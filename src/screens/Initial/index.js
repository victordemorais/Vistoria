import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import ButtonRounded from '../../components/ButtonRounded'
import Logo from '../../components/Logo'

export class Auth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.Main}>
          <Text style={styles.textMain}>Bem Vindo(a)</Text>
          <Text style={styles.paragraph}>
            Selecione abaixo a opção que deseja para prosseguir.
          </Text>
        </View>
        <View style={{ width: 330, marginTop: 40 }}>
          <ButtonRounded
            title="Faça uma cotação"
            isSelectedColor="#fff"
            isSelectedColorFont={'#4F7BFE'}
            isSelected
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <ButtonRounded
            title="Já sou cliente"
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E78F7',
  },
  logo: {
    flexDirection: 'row',
  },
  logoImg: {
    height: 40,
    width: 40,
  },
  logoText: {
    fontSize: 27,
    color: '#fff',
    fontWeight: 'bold',
  },
  textMain: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  paragraph: {
    marginTop: 20,
    textAlign: 'center',
    width: 240,
    color: '#fff',
    fontSize: 16,
  },
})

export default Auth
