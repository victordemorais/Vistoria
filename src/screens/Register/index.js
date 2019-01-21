import React, { Component } from 'react'
import { Text, View, StyleSheet, AsyncStorage,TouchableOpacity } from 'react-native'
import InputLabelShadow from '../../components/InputLabelShadow'
import ButtonRounded from '../../components/ButtonRounded'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from '../../actions/register'
import Icon from 'react-native-vector-icons/FontAwesome'

class Register extends Component {
  constructor(props){
    super(props)
  }
  state = {
    complete_name: null,
    cpf: null,
    phone_number: null,
    email: null,
    token: null,
  }
  register = async () => {
    const token = await AsyncStorage.getItem('token')
    this.setState({ token })
    this.props.register.setRegister(this.state)
    this.props.register.register(this.props.registerVistory)
    this.props.navigation.navigate('Term')
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
      style={{ position: 'absolute', top: 15, left: 15 }}
      onPress={() => this.props.navigation.navigate('NewVistory')}>
      <Icon name="arrow-left" size={20} color="#000" />
    </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.textBackground}> Cadastro </Text>
          <Text style={styles.textHeader}> Cadastro </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.rowinput}>
            <InputLabelShadow
              label="Nome Completo"
              style={[styles.input, { width: '100%' }]}
              placeholder={'Digite aqui seu nome completo'}
              value={this.state.complete_name}
              onChangeText={complete_name => this.setState({ complete_name })}
            />
          </View>
          <View style={styles.rowinput}>
            <InputLabelShadow
              label="CPF"
              style={styles.input}
              placeholder={'000.000.000-00'}
              mask={'[000].[000].[000]-[00]'}
              value={this.state.cpf}
              onChangeText={cpf => this.setState({ cpf })}
            />
            <InputLabelShadow
              label="Telefone"
              style={styles.input}
              placeholder={'(00)0 0000 0000'}
              mask={'([00])[00000]-[0000]'}
              value={this.state.phone_number}
              onChangeText={phone_number => this.setState({ phone_number })}
            />
          </View>

          <View style={styles.rowinput}>
            <InputLabelShadow
              label="Email"
              style={[styles.input, { width: '100%' }]}
              placeholder={'Digite aqui seu e-mail.'}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={{ width: '90%' }}>
            <ButtonRounded
              title="Avançar"
              isSelected
              isSelectedColorFont={'#fff'}
              isSelectedColor={'#4F7BFE'}
              onPress={() => this.register()}
            />
          </View>
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
    marginBottom: 70,
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
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    margin: 5,
    flex: 1,
  },
  rowinput: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
  },
})

const mapStateToProps = state => ({
    registerVistory: state.register,
 })
const mapDispatchToProps = dispatch => {
  return {
    register: bindActionCreators(registerActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
