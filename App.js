import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListingDetaisScreen from './app/screens/ListingDetailsScreen/ListingDetaisScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <ListingDetaisScreen />
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
