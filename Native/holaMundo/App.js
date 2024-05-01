import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Texto= ()=>{
  const [contenido, setContenido]= useState('Hola ReactNative :)')
  const actualizaTexto= ()=>{ setContenido('State actulizado con exito') }
  return(
    <Text style={{fontSize:24}} onPress={actualizaTexto}> {contenido} </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
        <Texto/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
