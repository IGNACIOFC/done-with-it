import { View, Text, StyleSheet, FlatList } from 'react-native'
import AppTextInput from '../../components/AppTextInput'

import IconComponent from '../../components/IconComponent/IconComponent'
import ListItem from '../../components/ListItem/ListItem'
import ListItemSeparator from '../../components/ListItemSeparator/ListItemSeparator'
import Screen from '../../components/Screen'
import colors from '../../config/colors'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]

export default function AccountScreen() {
  return (
    <Screen>
      <View style={styles.profile}>
        <ListItem title={'Ignacio Fernández'} subtitle={'ifernandezcerro@gmail.com'} image={require('../../assets/mosh.jpg')}/>
      </View>
      <View style={styles.options}>
        <FlatList 
          keyExtractor={menuItem => menuItem.title}
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem 
              title={item.title}
              IconComponent={
                <IconComponent 
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
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