import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createAppContainer} from 'react-native-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const HomeScreen= ({navigation})=>{
  return(
    <View style={styles.container}>
      <Text> Soy la Pantalla HOME! </Text>
      <Button
       title='Ir a detalle'
       onPress={()=>navigation.push('Detalle') }/>
      <StatusBar style="auto" />
    </View>
  )
}

const DetalleScreen= ()=>{
  return(
    <View style={styles.container}>
      <Text> Soy la Pantalla DETALLE </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const AppNavigator= createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  Detalle:{
    screen:DetalleScreen
  }, 
},{initialRouteName:'Home'})

export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
