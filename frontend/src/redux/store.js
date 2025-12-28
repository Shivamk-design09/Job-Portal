/* eslint-disable no-unused-vars */
//configure store 
//reducers recieve the actions ,read the type, use payloed if needed, update the state
//import the slice in store 
import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authslice"

 const store = configureStore({
    reducer:{
        auth: authSlice
    }
})

export default store