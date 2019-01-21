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
            <Photos style={styles.photo} image={front} label="Foto Frontal" />
            <Photos style={styles.photo} image={back} label="Foto Traseira" />
          </View>
          <View style={styles.rowinput}>
            <Photos style={styles.photo} image={lateral} label="Foto Lateral" />
            <Photos style={styles.photo} image={interna} label="Foto Interna" />
          </View>
          <View style={styles.rowinput}>
            <Photos style={styles.photo} image={motor} label="Foto do Motor" />
            <Photos
              style={styles.photo}
              image={portamala}
              label="Foto Porta Mala"
            />
          </View>
          <View style={styles.rowinput}>
            <Photos
              style={styles.photo}
              image={fotofull}
              label="Foto 360 º"
              cem
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
