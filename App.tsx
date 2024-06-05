

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { 
  Button,
  Text, 
  View,
} from 'react-native';


const App=()=>{
  // let name="Brand";
  const [name,setName]=useState("Brand")
  return (
    <View>
      <Text style={{fontSize:30}}>Props in React-Native</Text>
      <Button title='Update Props' onPress={()=>setName("Adixoo")}></Button>
      <User name={name} age={29}/>
    </View>
  )
}
 
const User=(props)=>{
  // console.warn(props.name);
  return (
    <View style={{backgroundColor:'green',padding:5}}>
      <Text style={{fontSize:30}}>Name:{props.name} </Text>
      <Text style={{fontSize:30}}>Age:{props.age} </Text>
    </View>
  )
}



export default App;
