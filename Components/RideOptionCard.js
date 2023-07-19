import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selecttravelTimeInfo } from '../Slices/navSlice'
const data=[
  {
    id:'Uber-X-123',
    title:'UberX',
    multiplyar:1,
    image:'https://links.papareact.com/3pn'

},{
  id:'Uber-XL-450',
  title:'Uber Xl',
  multiplyar:1.2,
  image:'https://links.papareact/5w8',

},{
  id:'Uber-LUX-786',
  title:'UberLuxury',
  multiplyar:1.75,
  image:'https://links.papareact.com/7pf'
}]
const Search_CHARGE_RATE=4.5;
const RideOptionCard = () => {
  const traveTimeInfo=useSelector(selecttravelTimeInfo)
  const navigation=useNavigation()
  const [selected,setSelected]=useState(null);
  return (
   <SafeAreaProvider style={styles.container}>
    <View style={styles.top} >
      <TouchableOpacity 
      onPress={()=>(
        navigation.navigate('NavigateCard')
      )}
      >
        <Icon name='chevron-left' type='fontawesome'/>
      </TouchableOpacity>
      <Text style={styles.firsText} >Select a ride-{
        traveTimeInfo?.distance.text
      }</Text>
    </View>
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>( 
      <TouchableOpacity
      onPress={()=>setSelected(item)}
      
    style={item.id === selected?.id ? styles.tochedStyle :styles.notTchedStyle }
    
      >
       <Image style={{
        height:90,
        width:90,
        resizeMode:'contain'
       }}
       source={{uri:item.image}}/> 
       <View style={{marginLeft:20}}>
        <Text style={{fontSize:17,lineHeight:30, fontWeight:300}}>{item.title} </Text>
        <Text>{traveTimeInfo?.duration?.text} Travel Time</Text>
       </View>
       <Text  style={{fontSize:17,lineHeight:33, fontWeight:300}}>

  {new Intl.NumberFormat('en-gb',{
   style:'currency',
   currency:'PKR'
  }).format(

    (traveTimeInfo?.duration?.value * Search_CHARGE_RATE* item.multiplyar/100)
  )
  
  }

       </Text>
      </TouchableOpacity>
    )}
    />
<View>
<TouchableOpacity style={selected? styles.selected : styles.notSelected} disabled={! selected}
onPress={()=>{
  navigation.navigate('RideBooked');
}}
>
  <Text style={{textAlign:'center', color:'white', fontSize:20,lineHeight:28,}} >Choose {selected?.title}</Text>
</TouchableOpacity>

</View>
   </SafeAreaProvider>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({
  container:{
  backgroundColor:'white',
 
  },
  firsText:{
    textAlign:'center',
    fontSize:20,
    lineHeight:28
  },

  notTchedStyle:{
  flexDirection:'row',
 justifyContent:'space-evenly',
  alignItems:'center',
  paddingHorizontal:20,
  marginHorizontal:5,
  borderRadius:8
},
tochedStyle:{
  flexDirection:'row',
 justifyContent:'space-evenly',
  alignItems:'center',
  paddingHorizontal:10,
  marginHorizontal:5,
  backgroundColor:'#c9c9c9',
  borderRadius:8
 
},
pressed:{
  opacity:0.2
},
selected:{
  backgroundColor:'black',
  paddingVertical:12,
 
  margin:20,
  borderRadius:8

},
notSelected:{
  backgroundColor:'#c9c9c9',
  paddingVertical:12,
  margin:20,
  borderRadius:8
},
top:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginBottom:13,
  marginTop:13
}

})