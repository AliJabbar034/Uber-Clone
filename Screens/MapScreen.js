import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../Components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../Components/NavigateCard'
import RideOptionCard from '../Components/RideOptionCard'
import RideBookedScreen from './RideBookedScreen'

const MapScreen = () => {
 const Stack= createStackNavigator()
  return (
    <View>
     
      <View style={styles.firstContainer}>
        <Map/>
      </View>
      <View style={styles.secondContainer}>
<Stack.Navigator screenOptions={{
  headerShown:false
}}>
  <Stack.Screen name='NavigateCard' component={NavigateCard}/> 
  <Stack.Screen name='RideOptionCard' component={RideOptionCard}/>
  <Stack.Screen name='RideBooked' component={RideBookedScreen} options={{
    headerShown:true,
    
  }}/>
</Stack.Navigator>

      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
secondContainer:{
  backgroundColor:'GRAY',
  height:'50%'
},
firstContainer:{
  height:'50%'
}

})