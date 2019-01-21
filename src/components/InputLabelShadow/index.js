import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'

export default props => {
  return (
    <View style={[props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInputMask
        style={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        placeholderTextColor="#aaa"
        mask={props.mask}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    color: '#4E78F7',
    top: -20,
    left: 5,
    position: 'absolute',
  },
  input: {
    width: '100%',
    padding: 8,
    color: '#000',
    backgroundColor: '#f3f3f3',
    borderRadius: 6,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
})
