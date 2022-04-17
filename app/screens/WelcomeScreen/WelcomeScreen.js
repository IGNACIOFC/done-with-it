import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
import AppButton from '../../components/AppButton'
import colors from '../../config/colors'

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
        style={styles.imageBackground} 
        source={require('../../assets/background.jpg')}
        blurRadius={10}
      >
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo-red.png')} style={styles.logo}/>
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title={'Login'} onPress={()=>navigation.navigate('Listings')}/>
          <AppButton title={'Sign Up'} color={'secondary'} onPress={()=>navigation.navigate('Account')}/>
        </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 50,
  },

  buttonsContainer: {
    width: '100%',
    padding: 15 
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
  logo: {
    height: 100,
    width: 100,
    
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },

  tagline: {
    fontWeight: '700',
    fontSize: 20,
    paddingTop: 40
  }

})