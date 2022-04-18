import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
 
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput/AppTextInput'

export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo-red.png')}/>

      <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={values => console.log(values)}
      >
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput 
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='Email'
              keyboardType='email-address'
              placeholder='Email'
              textContentType="emailAddress"
              icon="email"
              onChangeText={handleChange("email")}
            />
            <AppTextInput 
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='Password'
              secureTextEntry
              icon="lock"
              textContentType="password"
              onChangeText={handleChange("password")}
            />
      
            <Button title="Login" onPress={handleSubmit}/>
          </>
        )}
      </Formik>
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