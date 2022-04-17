import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Screen from '../../components/Screen'
import ProductCard from '../../components/ProductCard'
import colors from '../../config/colors'

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale!',
    subtitle: '100 €',
    img: require('../../assets/jacket.jpg')
  }, 
  {
    id: 2,
    title: 'New couch for sale!',
    subtitle: '1000 €',
    img: require('../../assets/couch.jpg')
  }
]

export default function ListingsScreen({navigation}) {
  return (
    <Screen style={styles.listingsContainer}>
      <FlatList 
        data={listings}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
            <ProductCard 
            title={item.title}
            subtitle={item.subtitle}
            image={item.img}
            />
          </TouchableOpacity>
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  listingsContainer: {
    width: '100%',
    flex: 1, 
    padding: 15,
    backgroundColor: colors.light
  }
})