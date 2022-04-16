import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import colors from '../../config/colors'

export default function ProductCard({title, subtitle, image}) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.img}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: colors.white
  },

  img: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  title: {
    padding: 20,
    fontWeight: '600',
    fontSize: 17
  },

  subtitle: {
    padding: 20,
    paddingTop: 0,
    color: colors.secondary,
    fontWeight: '600'
  }
})