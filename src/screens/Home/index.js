import ListCars from './../../components/ListCars/index'
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  AsyncStorage,
} from 'react-native'
import imgCar from '../../../assets/imgs/carMain.png'
import ButtonRounded from '../../components/ButtonRounded'
import axios from 'axios'
class Home extends Component {
  state = {
    cars: [],
  }
  componentDidMount = () => {
    this.getListVehicles()
  }

  getListVehicles = async () => {
    const token = await AsyncStorage.getItem('token')
    console.log(`token ${token}`)
    await axios
      .get('http://198.199.87.49:5000/veiculos', {
        headers: { Authorization: `Token ${token}` },
      })
      .then(response => {
        this.setState({
          cars: response.data,
        })
      })
      .catch(error => {
        console.log(error)
        //  Alert.alert('Oooops!', 'CPF ou Senha Incorretos.')
      })
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Image source={imgCar} style={styles.imgCar} />
        <View
          style={{
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textMain}>Olá Bruno! </Text>
          <Text style={{ width: 250, fontSize: 17 }}>
            Confira suas cotações abaixo ou realize uma nova cotação.
          </Text>
        </View>
        <View
          style={{
            marginTop: 50,
            flex: 1,
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: 'column',
            }}>
            {this.state.cars.map(car => (
              <ListCars
                key={car.id}
                carName={car.marca + ' ' + car.modelo}
                carVersion={car.version}
                carStatus={car.status}
              />
            ))}
          </ScrollView>
          <View
            style={{
              width: 300,
              marginBottom: 20,
            }}>
            <ButtonRounded
              title="+ Nova Vistoria"
              isSelectedColorFont={'#fff'}
              isSelectedColor={'#4F7BFE'}
              navigation={this.props.navigation}
              page="Login"
              isSelected
              onPress={() => this.props.navigation.navigate('Cotation')}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textMain: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 45,
    color: '#000',
    borderBottomWidth: 10,
    borderBottomColor: '#fff',
    width: '100%',
  },
  imgCar: {
    position: 'absolute',
    marginLeft: -50,
    width: 300,
    height: 200,
  },
})

export default Home
