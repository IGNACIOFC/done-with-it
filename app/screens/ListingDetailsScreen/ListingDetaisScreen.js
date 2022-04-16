import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../../config/colors'
import ListItem from '../../components/ListItem/ListItem'

export default function ListingDetaisScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../../assets/jacket.jpg')}/>
      <View style={styles.details}>
        <Text style={styles.title}>Red Jacket for sale!</Text>
        <Text style={styles.subtitle}>100 €</Text>
        <ListItem title={'Ignacio Fernandez'} subtitle={'5 Listings'} image={require('../../assets/mosh.jpg')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%'
  },

  details: {
    padding: 20
  },

  title: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 10
  },

  subtitle: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 50
  }


})