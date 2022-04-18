import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = function () {
  return(
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: true
      }}>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="Details" component={ListingDetailsScreen} />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Feed" 
        component={ListingsScreen}
        options={{
          tabBarIcon: ({size}) => (
            <MaterialCommunityIcons name='home' size={size}/>
          )
        }}/>
      <Tab.Screen 
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({size}) => (
            <MaterialCommunityIcons name='account' size={size}/>
          )
        }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
