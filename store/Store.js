import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../Slices/navSlice";



export  const store=configureStore({
reducer:{
    nav:navSliceReducer
}
}

);