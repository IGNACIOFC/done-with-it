import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import colors from '../../config/colors'

export default function ProductCard({title, subtitle, image}) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.img}/>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 15,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: colors.white
  },

  detailsContainer: {
    padding: 20
  },

  img: {
    width: '100%',
    height: 150,
  },

  title: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 10
  },

  subtitle: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 15
  }
})