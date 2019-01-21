import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { BoxShadow } from 'react-native-shadow'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonRounded = props => {
  return (
    <View style={{ alignItems: 'center' }}>
      {props.isSelected && (
        <BoxShadow
          setting={{
            width: 200,
            height: 0,
            color: props.isSelectedColor ? props.isSelectedColor : '#fff',
            border: 20,
            radius: 5,
            opacity: 0.4,
            x: 0,
            y: 50,
          }}
        />
      )}
      <TouchableHighlight
        underlayColor={
          props.isSelectedColor ? props.isSelectedColor : 'transparent'
        }
        onPress={props.onPress}
        style={[
          styles.menuRounded,
          props.isSelectedColor
            ? { backgroundColor: props.isSelectedColor }
            : null,
        ]}>
        <Text
          style={[
            styles.text,
            props.textStyle,
            props.isSelectedColorFont
              ? { color: props.isSelectedColorFont }
              : null,
          ]}>
          {props.icon && <Icon name={props.iconName} size={18} />}
          {'  '}
          {props.title.toUpperCase()}
        </Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  menuRounded: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 12.5,
  },
})
export default ButtonRounded
