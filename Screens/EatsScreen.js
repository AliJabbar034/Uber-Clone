import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RideBookedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Nothing Here ...............</Text>
    </View>
  )
}

export default RideBookedScreen

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    }
})