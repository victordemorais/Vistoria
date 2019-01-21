import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonRounded from '../../components/ButtonRounded'
import Photos from '../../components/Photo'
import front from '../../../assets/imgs/PhotosCar/front.png'
import back from '../../../assets/imgs/PhotosCar/back.png'
import lateral from '../../../assets/imgs/PhotosCar/lateral.png'
import interna from '../../../assets/imgs/PhotosCar/interna.png'
import motor from '../../../assets/imgs/PhotosCar/motor.png'
import portamala from '../../../assets/imgs/PhotosCar/interna.png'
import fotofull from '../../../assets/imgs/PhotosCar/360.png'
class PhotosCar extends Component {
  state = {
    frontal: '',
    traseira: '',
    lateral: '',
    interna: '',
    motor: '',
    portamala: '',
    full: '',
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ position: 'absolute', top: 15, left: 15 }}
          onPress={() => this.props.navigation.navigate('Term')}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={{ color: '#4F7BFE' }}>Agilize a vistoria do seu</Text>
          <Text style={{ color: '#4F7BFE', fontSize: 18, fontWeight: 'bold' }}>
            Honda Civic
          </Text>
          <View style={styles.rowinput}>
            <Photos
              style={styles.photo}
              image={front}
              label="Foto Frontal"
              updateImage={frontal => this.setState({ frontal })}
            />
            <Photos
              style={styles.photo}
              image={back}
              label="Foto Traseira"
              updateImage={traseira => this.setState({ traseira })}
            />
          </View>
          <View style={styles.rowinput}>
            <Photos
              style={styles.photo}
              image={lateral}
              label="Foto Lateral"
              updateImage={lateral => this.setState({ lateral })}
            />
            <Photos
              style={styles.photo}
              image={interna}
              label="Foto Interna"
              updateImage={interna => this.setState({ interna })}
            />
          </View>
          <View style={styles.rowinput}>
            <Photos
              style={styles.photo}
              image={motor}
              label="Foto do Motor"
              updateImage={motor => this.setState({ motor })}
            />
            <Photos
              style={styles.photo}
              image={portamala}
              label="Foto Porta Mala"
              updateImage={portamala => this.setState({ portamala })}
            />
          </View>
          <View style={styles.rowinput}>
            <Photos
              style={styles.photo}
              image={fotofull}
              label="Foto 360 º"
              cem
              updateImage={full => this.setState({ full })}
            />
          </View>
          <View style={{ width: '50%' }}>
            <ButtonRounded
              title="Prosseguir"
              isSelected
              isSelectedColorFont={'#fff'}
              isSelectedColor={'#C9C8C7'}
              navigation={this.props.navigation}
              onPress={() => this.props.navigation.navigate('Finished')}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  rowinput: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
  },
  photo: {
    width: '50%',
    margin: 5,
    flex: 1,
  },
})

export default PhotosCar
