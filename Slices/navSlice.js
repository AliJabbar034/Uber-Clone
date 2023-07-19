import { createSlice } from "@reduxjs/toolkit";

const initialState={
    origin:null,
    destination:null,
    travelTimeInfo:null
};
export const navSlice=createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrigin:(state,action)=>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination=action.payload;
        },
        setTravelTimeInfo:(state,action)=>{
            state.travelTimeInfo=action.payload;
        }
    }
});

export default navSlice.reducer;
export const {setDestination,setOrigin,setTravelTimeInfo}= navSlice.actions;
export const selectOrgin=(state)=>state.nav.origin;
export const selectDestination=(state)=>state.nav.destination;
export const selecttravelTimeInfo=(state)=>state.nav.travelTimeInfo;
