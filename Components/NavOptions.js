import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Icon } from 'react-native-elements'
import Description from './Description'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrgin } from '../Slices/navSlice'
const data=[
    {
        id:'123',
        title:'Get a ride',
        image:'https://links.papareact.com/3pn',
        screen:'MapScreen'
    },
    {
        id:'456',
        title:'OrderFoood',
        image:'https://links.papareact.com/28w',
        screen:'EatsScreen'
    },
]

const NavOptions = () => {
    const origin=useSelector(selectOrgin)
    const navigation=useNavigation()
   
  return (
  
<>

      
<FlatList

data={data}
horizontal
keyExtractor={(item)=>item.id}
renderItem={({item})=>(
    
    <TouchableOpacity  style={styles.container} 
    onPress={()=>navigation.navigate(item.screen) }
    disabled={!origin}
    >
       
          <View style={!origin && styles.originBase}>
          <Image source={{uri:item.image }} 
            style={styles.image}/>
            <Text style={styles.text}>{item.title}</Text>
            <Icon 
           style={styles.icon}
            type='antdesign' color='white' name='arrowright'/>
          </View>
        

        </TouchableOpacity>)}
    
/>
<Description/>

</>

    
  );
}

export default NavOptions
const styles=StyleSheet.create({
    image:{
        width:120,
        height:120,
        resizeMode:'contain'
    },
    container:{
        backgroundColor:'#c9c9c9',
        width:160,
        padding:8,
        paddingLeft:24,
        paddingBottom:32,
        margin:8,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center'
       

    },
    text:{
        fontWeight:600,
        marginTop:8,
        fontSize:18,
        
    },
    icon:{
       padding:4,
       backgroundColor:'black',
       width:35,
       borderRadius:18,
       marginTop:20,
       marginLeft:30
       
      
        
    },
    originBase:{
        opacity:0.2
    }
})

