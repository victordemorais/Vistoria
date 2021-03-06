import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'
export default props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInputMask
        style={styles.input}
        secureTextEntry={props.secureTextEntry ? true : false}
        value={props.value}
        onChangeText={props.onChangeText}
        mask={props.mask}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    marginTop: -2,
    marginLeft: 5,
    width: 50,
  },
  input: {
    padding: 10,
    marginLeft: 5,
    width: '80%',
    color: '#fff',
  },
})
