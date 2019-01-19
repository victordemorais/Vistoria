import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ListCars extends Component {
  render() {
    let statusColor =
      this.props.carStatus.toUpperCase() === 'APROVADO' ? '#27AE60' : '#E4a810'
    let statusIcon =
      this.props.carStatus.toUpperCase() === 'APROVADO' ? 'check' : 'warning'
    return (
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          flexDirection: 'row',
          padding: 15,
          borderBottomColor: '#dadada',
          borderBottomWidth: 1,
        }}>
        <Icon name="car" size={40} color="#4F7BFE" />
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#4F7BFE',
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {this.props.carName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginLeft: 10,
            }}>
            {this.props.carVersion}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            marginLeft: 10,
            position: 'absolute',
            right: 30,
            top: '50%',
            color: statusColor,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {this.props.carStatus.toUpperCase()}{' '}
          <Icon name={statusIcon} color={statusColor} />
        </Text>
        <View
          style={{
            height: 30,
            position: 'absolute',
            left: 15,
            bottom: -10,
            width: '100%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              textDecorationLine: 'underline',
            }}>
            Mais Detalhes
          </Text>
        </View>
      </View>
    )
  }
}

export default ListCars
