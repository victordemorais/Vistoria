import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { BoxShadow } from 'react-native-shadow'
const shadowOpt = {}
export class Box extends Component {
  render() {
    let icon = this.props.icon
    return (
      <View style={{ margin: 20 }}>
        <TouchableHighlight onPress={this.props.onPress} underlayColor={'transparent'}>
          <View>
            <BoxShadow
              setting={{
                width: 60,
                height: 10,
                color: '#000',
                border: 50,
                radius: 0,
                opacity: 0.2,
                x: 45,
                y: 115,
              }}
            />
            <View style={[styles.box, this.props.style]}>
              <Image source={this.props.icon} />
              <Text style={{ color: '#507BFE', fontSize: 12, marginTop: 10 }}>
                {this.props.name.toUpperCase()}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#FDFEFE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Box
