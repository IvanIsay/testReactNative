import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, SectionList} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <SectionList
        sections={[
          {title:'Grupo A',
           data:[
            {key:'1',name:'Ivan Isay'}, 
            {key:'2',name:'Naomi Guerra'}, 
            {key:'3',name:'Reyna Martinez'}, 
            {key:'4',name:'Ana Lopez'}, ]
          },
          {title:'Grupo B',
            data:[
             {key:'5',name:'Ivan Isay'}, 
             {key:'6',name:'Naomi Guerra'}, 
             {key:'7',name:'Reyna Martinez'}, 
             {key:'8',name:'Ana Lopez'}, ]
           },
           {title:'Grupo C',
            data:[
             {key:'9',name:'Ivan Isay'}, 
             {key:'10',name:'Naomi Guerra'}, 
             {key:'11',name:'Reyna Martinez'}, 
             {key:'12',name:'Ana Lopez'}, ]
           },
        ]}
        renderItem={  ({item})=> <Text style={styles.item}> {item.name}  </Text>  }
        renderSectionHeader={ ({section})=> <Text style={styles.section} > {section.title}  </Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({

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
  