import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput/AppTextInput'

export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo-red.png')}/>
      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='Email'
        keyboardType='email-address'
        placeholder='Email'
        textContentType="emailAddress"
        icon="email"
      />
      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='Password'
        secureTextEntry
        icon="lock"
        textContentType="password"
      />

      <Button title="Login"/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }, 

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center'
  }
})