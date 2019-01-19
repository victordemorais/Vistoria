import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={props.secureTextEntry ? true : false}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '100%',
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    marginTop: -7,
    marginLeft: 5,
    width: 50,
  },
  input: {
    marginLeft: 5,
    width: '80%',
    color: '#fff',
  },
})
