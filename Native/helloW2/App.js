import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,ActivityIndicator} from 'react-native';

export default function App() {

    const [users, setUsers]= useState([])
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse=> reponse.json())
        .then( data=>{ setUsers(data); setLoading(false)    })
    },[])

    if(loading){
        return <View style={styles.center}> 
            <ActivityIndicator size="large" color="#0000ff"/>      
            <Text>Cargando</Text> 
        
        </View>
    }

  return (
    <View style={styles.container}>
      <FlatList 
        data={users}
        renderItem={ ({item})=><Text style={styles.item}> {item.id} {item.username}  </Text> } 
      />  
    </View>
  );
}

const styles = StyleSheet.create({
center:{
flex:1,
alignItems:'center',
justifyContent:'center',
},
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop:40,
  },
  item:{
    padding:10,
    fontSize:24,
    height:50,
    borderColor:'blue',
    borderBottomWidth:1,
  },
  section:{
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#eee',
    paddingTop:4,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:4,
  }

});
  