import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

export default function ListItem({title, subtitle, image}) {
  return (
    <View style={styles.listItemContainer}>
      <Image style={styles.image} source={image}/>
      <View style={styles.listItemDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemDetails: {
    paddingLeft: 20,
  },

  subtitle: {
    color: colors.medium
  },

  title: {
    paddingBottom: 7,
    fontSize: 16,
    fontWeight: '600'
  }

})