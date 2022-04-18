import { View, TextInput, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../../config/colors'
import defaultStyles from '../../config/styles'

export default function AppTextInput({icon, ...inputProps}) {
  return (
    <View style={styles.container}>
      {icon &&<MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
      <TextInput style={defaultStyles.text} {...inputProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon:{
    marginRight: 10
  }
})