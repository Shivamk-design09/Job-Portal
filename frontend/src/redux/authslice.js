/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
//give name of slice 
//give initial value of sice
//actions and reducers

const authSlice = createSlice({
    name:"User",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        setUser:(state,action)=>{
            state.user = action.payload
        }   
    }
})

export const {setLoading,setUser} = authSlice.actions
export default authSlice.reducer
 