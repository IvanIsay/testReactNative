import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Texto= ({style})=>{
  const [contenido, setContenido]= useState('Hola Native :)')
  const actualizaTexto= ()=>{ setContenido('actualizado ') }
  return(
    <Text style={[styles.text,style]} onPress={actualizaTexto}> {contenido} </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
        <Texto style={styles.red}/>
        <Texto style={styles.green}/> 
        <Texto style={styles.blue}/>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'white',
    fontSize:28,

  },
  red:{
    
    backgroundColor:'red',
  },
  green:{
    
    backgroundColor:'green',
  },
  blue:{
    
    backgroundColor:'blue',
  },
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#fff',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  },


});
