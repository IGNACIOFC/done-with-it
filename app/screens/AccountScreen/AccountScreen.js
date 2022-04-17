import { View, Text, StyleSheet } from 'react-native'
import IconComponent from '../../components/IconComponent/IconComponent'
import ListItem from '../../components/ListItem/ListItem'
import Screen from '../../components/Screen'
import colors from '../../config/colors'

export default function AccountScreen() {
  return (
    <Screen>
      <View style={styles.profile}>
        <ListItem title={'Ignacio Fernández'} subtitle={'ifernandezcerro@gmail.com'} image={require('../../assets/mosh.jpg')}/>
      </View>
      <View style={styles.options}>
        <ListItem title={'My Listings'}  IconComponent={<IconComponent name={'format-list-bulleted'} backgroundColor={colors.primary} />}/>
        <ListItem title={'My messages'} IconComponent={<IconComponent name={'email'} backgroundColor={colors.secondary}/>}/>
      </View>
      <ListItem title={'Log Out'} IconComponent={<IconComponent name={'logout'} backgroundColor={'#ffe66d'}/>}/>
    </Screen>
    
  )
}

const styles = StyleSheet.create({
  options: {
    marginVertical: 15
  },
  profile: {
    backgroundColor: '#fff',
    marginVertical: 15
  }
})