import { FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Screen from '../../components/Screen'
import ProductCard from '../../components/ProductCard'
import colors from '../../config/colors'

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale!',
    subtitle: '100 €'
  }, 
  {
    id: 2,
    title: 'Red jacket for sale!',
    subtitle: '100 €'
  }
]

export default function ListingsScreen() {
  return (
    <Screen style={styles.listingsContainer}>
      <FlatList 
        data={listings}
        renderItem={({item}) => (
          <ProductCard 
          title={item.title}
          subtitle={item.subtitle}
          image={require('../../assets/jacket.jpg')}
        />
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