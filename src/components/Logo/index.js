import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import carImg from '../../../assets/imgs/car.png'

class Logo extends Component {
  render() {
    return (
      <View
        style={[
          styles.logo,
          this.props.style,
          this.props.margin ? { margin: this.props.margin } : null,
        ]}>
        <Image
          source={carImg}
          style={[
            styles.logoImg,
            this.props.size
              ? { height: this.props.size, width: this.props.size }
              : null,
          ]}
        />
        <Text
          style={[
            styles.logoText,
            this.props.fontSize ? { fontSize: this.props.fontSize } : null,
          ]}>
          {' '}
          VistoriApp{' '}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})
export default Logo
