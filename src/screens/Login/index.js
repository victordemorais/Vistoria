import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from '../../components/Logo'
import InputText from '../../components/InputText'
import ButtonRounded from '../../components/ButtonRounded'
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cpf: '21678025526',
      password: 'mNVk9?Gr',
    }
  }
  signIn = () => {
    axios
      .post('http://198.199.87.49:5000/login', this.state)
      .then(response => {
        AsyncStorage.setItem('token', response.data.token)
        this.props.navigation.navigate('Home')
      })
      .catch(error => {
         Alert.alert('Oooops!', 'CPF ou Senha Incorretos.')
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => this.props.navigation.navigate('Initial')}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Logo />
        <View style={styles.main}>
          <InputText
            label={'CPF: '}
            value={this.state.cpf}
            onChangeText={cpf => this.setState({ cpf })}
          />
          <InputText
            label={'Senha: '}
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                color: '#fff',
                textDecorationLine: 'underline',
              }}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>
          <ButtonRounded
            title="Entrar"
            isSelected
            isSelectedColorFont={'#4F7BFE'}
            isSelectedColor={'#fff'}
            navigation={this.props.navigation}
            page="Login"
            onPress={() => this.signIn()}
          />
          <ButtonRounded
            title="Entrar com Facebook"
            navigation={this.props.navigation}
            page="Login"
            icon
            iconName="facebook"
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
  iconBack: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  main: {
    width: '70%',
  },
})

export default Login
