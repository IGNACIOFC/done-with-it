import { Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
 
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput/AppTextInput'
import AppButton from '../../components/AppButton'
import ErrorMessage from '../../components/ErrorMessage'
import colors from '../../config/colors'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo-red.png')}/>

      <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput 
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='Email'
              keyboardType='email-address'
              placeholder='Email'
              textContentType="emailAddress"
              icon="email"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            <ErrorMessage style={{color:'red'}} error={errors.email} visible={touched.email}/>

            <AppTextInput 
              autoCapitalize="none"
              autoCorrect={false}
              placeholder='Password'
              secureTextEntry
              icon="lock"
              textContentType="password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />
            <ErrorMessage style={{color:'red'}} error={errors.password} visible={touched.password} />
            
            <AppButton title="Login" onPress={handleSubmit}/>
          </>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1
  }, 

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 50
  }
})