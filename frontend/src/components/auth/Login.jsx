/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant'
import {toast} from "sonner"
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../../redux/authslice'
import { Loader2 } from 'lucide-react'


// useselector redux se data uthane or read kane ka hota h
//useselector ka use state ko component me dikhane ke liye hota 
//state pora redux store h

const Login = () => {


  const [input, setinput] = useState({
    email: '',
    password: '',
    role: '',
  })
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector(store => store.auth)
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }


  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
        headers:{
          "Content-Type":"application/json"
        },withCredentials:true
      })
      if(res.data.success){
        dispatch(setUser(res.data.user))
        navigate('/')
        toast.success(res.data.message)
      }
    }catch(error){
      console.log(error)
      toast.error(error.respnonse?.data?.message ||"something is missing ")
    }finally{
      dispatch(setLoading(false))
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>email</Label>
            <Input
              type="email"
              value={input.email}
              name="email" //name is a string identifier
              onChange={changeEventHandler}   
              placeholder="enter your email"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder=" enter your password"
            />
          </div>

          <div className=" gap">
            <RadioGroup className="flex items-center justify-beween">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  id="student"
                  value="student"
                  checked={input.role=== 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="recruiter"
                  name="role"
                  value="recruiter"
                  checked={input.role=== 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="recuriter">recuriter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? <Button className="w-full m-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait </Button>:
             <Button className="w-full my-4 bg-green-700" type="submit">
            Login
          </Button>
          }
          <span className="text-sm">
            Dont have an Acount
            <Link to="/signup" className="text-blue-500">
              signup{' '}
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
