/* eslint-disable no-unused-vars */
//configure store 
//reducers recieve the actions ,read the type, use payloed if needed, update the state
//import the slice in store 
import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authslice"
import jobSlice from "./jobSlice"
import companySlice from "./companySlice"

 const store = configureStore({
    reducer:{
        auth: authSlice,
        job: jobSlice,
        company: companySlice
    }
})

export default store