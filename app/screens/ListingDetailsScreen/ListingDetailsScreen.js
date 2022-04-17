import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../../config/colors'
import ListItem from '../../components/ListItem/ListItem'

export default function ListingDetailsScreen({route}) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.img}/>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <ListItem title={'Ignacio Fernandez'} subtitle={'5 Listings'} image={require('../../assets/mosh.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%'
  },

  container: {
    backgroundColor: colors.white,
    flex: 1
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