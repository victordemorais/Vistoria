import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import InputLabelShadow from '../../components/InputLabelShadow'
import ButtonRounded from '../../components/ButtonRounded'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from '../../actions/register'
import Icon from 'react-native-vector-icons/FontAwesome'
class NewVistory extends Component {
  state = {
    cnh: null,
    plate: null,
    brand: null,
    model: null,
    year: null,
  }
  registerVehicle = () => {
    this.props.setRegister(this.state)
    this.props.navigation.navigate('Register')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ position: 'absolute', top: 15, left: 15 }}
          onPress={() => this.props.navigation.navigate('Cotation')}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.textBackground}> Veículo </Text>
          <Text style={styles.textHeader}> Veículo </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.rowinput}>
            <InputLabelShadow
              label="CNH"
              style={styles.input}
              placeholder={'000000000000'}
              mask={'[000000000000]'}
              value={this.state.cnh}
              onChangeText={cnh => this.setState({ cnh })}
            />
            <InputLabelShadow
              label="Placa do Veículo"
              style={styles.input}
              mask={'[AAA]-[0000]'}
              placeholder={'AAA-0000'}
              value={this.state.plate}
              onChangeText={plate => this.setState({ plate })}
            />
          </View>
          <View style={styles.rowinput}>
            <InputLabelShadow
              label="Marca do Veículo"
              style={styles.input}
              placeholder={'Digite a marca do veículo'}
              value={this.state.brand}
              onChangeText={brand => this.setState({ brand })}
            />
            <InputLabelShadow
              label="Modelo"
              style={styles.input}
              placeholder="Digite o modelo do veículo"
              value={this.state.model}
              onChangeText={model => this.setState({ model })}
            />
          </View>
          <View style={styles.rowinput}>
            <InputLabelShadow
              label="Ano de Fabricação e de Modelo"
              style={[styles.input, { width: '100%' }]}
              placeholder={'Digite o ano de fabricação e modelo.'}
              mask={'[0000]'}
              value={this.state.year}
              onChangeText={year => this.setState({ year })}
            />
          </View>
          <View style={{ width: '90%' }}>
            <ButtonRounded
              title="Avançar"
              isSelected
              isSelectedColorFont={'#fff'}
              isSelectedColor={'#4F7BFE'}
              navigation={this.props.navigation}
              onPress={() => this.registerVehicle()}
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
  register: state.register,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(registerActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewVistory)
