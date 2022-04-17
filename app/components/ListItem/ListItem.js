import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

export default function ListItem({title, subtitle, image, IconComponent, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItemContainer}>
        {IconComponent}
        { image && <Image style={styles.image} source={image}/> }
        <View style={styles.listItemDetails}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableOpacity>
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
    backgroundColor: colors.white,
    padding: 15
  },
  listItemDetails: {
    paddingLeft: 12,
    justifyContent: 'center'
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