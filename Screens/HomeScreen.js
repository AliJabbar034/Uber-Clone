import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import NavOptions from '../Components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Google_Api_KEY } from '../Const/GoogleMapKey';
import { useDispatch } from 'react-redux';
import {setDestination,setOrigin} from '../Slices/navSlice'
const HomeScreen = () => {
  const dispath=useDispatch();
  return (
    <View className=' bg-white h-full'>
      <View>
        <Image 
        source={{ uri:'https://links.papareact.com/gzs' }}
        style={{
            width:100,
            height:100,
            resizeMode:'contain',
            marginTop:50,
            marginHorizontal:20
        }}/>
        
       
       
        </View>
        <GooglePlacesAutocomplete 
        onPress={(data,details=null)=>{
        dispath(setOrigin({
          location:details.geometry.location,
          description:data.description
        }))
        dispath(setDestination(null))
        }}
        fetchDetails={true}
        debounce={400}
        placeholder='Where From?'
        styles={{
          container:{
            flex:0,
            marginHorizontal:10
          },
          textInput:{
            fontSize:18
          }
        }}
        query={{
          key:Google_Api_KEY,
          language:'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        />
        <NavOptions/>
    </View>
  )
}

export default HomeScreen