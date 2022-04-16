import { View, Text, StyleSheet } from 'react-native'
import Constants  from 'expo-constants'
console.log(Constants)

export default function Screen({children, style}) {
  return (
    <View style={[styles.screen, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  }
})