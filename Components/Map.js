
import React from 'react'
import MapView from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrgin, setTravelTimeInfo } from '../Slices/navSlice';
import {Marker} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { Google_Api_KEY } from '../Const/GoogleMapKey';
import { useRef } from 'react';
import { useEffect } from 'react';

const Map = () => {
  const origin=useSelector(selectOrgin);
  const destination=useSelector(selectDestination);
  const mapRef=useRef(null);
  const dispatch=useDispatch()
useEffect(()=>{
  if(! origin || ! destination ) return;
  mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
    edgePadding:{top:50 , right:50 , bottom:50 , left:50}
  }
  )
},[
  origin,destination
]);

useEffect(()=>{
  if(! origin || ! destination ) return;
  const getTravelTime=async()=>{
 const Url=`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${Google_Api_KEY}`;
 fetch(Url).then((res)=>res.json()).then(data=>(
 dispatch(setTravelTimeInfo(data.rows[0].elements[0]))
 ))
  }
  getTravelTime();
},

[
  Google_Api_KEY,origin,destination 
])


  return (
    <MapView 
    ref={mapRef}
    style={styles.map}
    mapType='mutedStandard'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
{origin && destination && (
  <MapViewDirections
  origin={origin.description}
  destination={destination.description}
  apikey={Google_Api_KEY}
  strokeWidth={2}
  strokeColor='black'
  
  />
)
}

    {origin?.location &&(

      <Marker
      coordinate={{
        latitude:origin.location.lat,
        longitude:origin.location.lng
      }}
      title='Origin'
      description={origin.description}
      identifier='origin'
      />


      
    )}

{destination?.location &&(

<Marker
coordinate={{
  latitude:destination.location.lat,
  longitude:destination.location.lng
}}
title='Destination'
description={destination.description}
identifier='destination'
/>



)}

  </MapView>
 
//   initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
// />
    
   
    

    
  )
}

export default Map
const styles=StyleSheet.create({
  map:{
    minHeight: "100%",
  
   
   
  }
})