import { Image, StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
 
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import FormField from '../../components/forms/FormField'
import { FormComponent, FormSubmit } from '../../components/forms'
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo-red.png')}/>

      <FormComponent
        initialValues={{email: "", password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
          
        <FormField 
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType='email-address'
          placeholder='Email'
          textContentType="emailAddress"
        />

        <FormField 
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry
          icon="lock"
          textContentType="password"
        />
        
        <FormSubmit title="Login" />

      </FormComponent>
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