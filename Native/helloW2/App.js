import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableHighlight } from 'react-native';



export default function App() {

  const[text, setText]= useState('default')
  const[submit, setSubmit]= useState('')

  return (
    <View style={styles.container}>

        <Text> Componente TextInput: {submit} </Text>

        <TextInput style={styles.input} 
        placeholder='soy un input' 
        onChangeText={t=> setText(t)} 
        defaultValue={text} />

{/*         <Button onPress={ ()=>{
          setSubmit(text)
          alert('texto enviado correctamente')
        } } title='Presioname '/> */}

        <TouchableHighlight
           underlayColor={'#FFC300'}
           activeOpacity={0.2}
           onPress={ ()=>{
            setSubmit(text)
            alert('texto enviado correctamente')
          } }>
           <Text> Otro boton </Text> 
        </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    height:40,
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
    width:'100%'
  }

});
  