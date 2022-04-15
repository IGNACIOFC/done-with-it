import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

export default function AppButton({title, onPress, color = 'primary'}) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    marginVertical: 10
  },
  button: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700'
  }
})