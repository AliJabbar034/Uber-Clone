import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Google_Api_KEY } from '../Const/GoogleMapKey'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, setDestination } from '../Slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import Description from './Description'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const dispatch=useDispatch();
    const navigation=useNavigation();
    const destination=useSelector(selectDestination)
  return (
    <SafeAreaProvider style={styles.container}>
        
      <Text style={styles.heading}>Good Morning Ali</Text>
      <View style={styles.rideContainer}>
<View>
    <GooglePlacesAutocomplete
    placeholder='Where to?'
    nearbyPlacesAPI='GooglePlacesSearch'
    debounce={400}
    styles={{
        container:{
            marginTop:10,
          flex:0,
          marginHorizontal:10
        },
        textInput:{
          fontSize:18,
          backgroundColor:'#DDDDDF'
        }
      }}
      enablePoweredByContainer={false}
      query={{
        key:Google_Api_KEY,
        language:'en'
      }}
      fetchDetails={true}
      minLength={2}
onPress={(data,details=null)=>{
  
    dispatch(setDestination({
        location:details.geometry.location,
        description:data.description
        
    } )  );
  
  
}}

    />

    
</View>
<Description/>
      </View>
     <View style={styles.selectionContainer} >
      <TouchableOpacity style={destination!==null ? styles.innerContainer : styles.notdestination }
       disabled={! destination}
      onPress={()=>(
        navigation.navigate('RideOptionCard')
      )}
     
      >
        <Icon name='car' type='font-awesome' color='white' size={16}/>
        <Text style={styles.rideText}>Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondContainer} >
        <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
        <Text style={styles.foodText}>Ride</Text>
      </TouchableOpacity>
     </View>
    
    </SafeAreaProvider>
  )
}

export default NavigateCard
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    heading:{
        textAlign:'center',
        paddingVertical:20,
        fontSize:20
    },
    rideContainer:{
        borderTopWidth:1,
        borderColor:'#c9c9c9',
        
        
    },
    selectionContainer:{
      flexDirection:'row',
      backgroundColor:"white",
      justifyContent:'space-evenly',
      paddingVertical:8,
      borderTopColor:'gray',
      marginHorizontal:10
      
    },
    innerContainer:{
     
      flexDirection:'row',
      width:96,
      paddingHorizontal:10,
      paddingVertical:12,
      backgroundColor:'black',
      justifyContent:'space-evenly',
      borderRadius:9999
      
    },
    secondContainer:{
     
      flexDirection:'row',
      width:96,
      paddingHorizontal:10,
      paddingVertical:12,
      backgroundColor:'white',
      justifyContent:'space-evenly',
      borderRadius:9999
      
    },
    rideText:{
      textAlign:'center',
      color:'white'
    },
    foodText:{
      textAlign:'center',
      color:'black'
    },
    notdestination:{
      flexDirection:'row',
      width:96,
      paddingHorizontal:10,
      paddingVertical:12,
      backgroundColor:'#c9c9c9',
      
      justifyContent:'space-evenly',
      borderRadius:9999
    }
    

})