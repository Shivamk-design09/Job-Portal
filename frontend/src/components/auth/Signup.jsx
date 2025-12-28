/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { USER_API_END_POINT } from '../../utils/constant'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authslice'
import { Loader2 } from 'lucide-react'

// loading is the state in slice
//dispatch is use to set action
//useselector is used for getting the value from slice

const Signup = () => {
  const [input, setinput] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: '',
  })  

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector(store=> store.auth)
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setinput({ ...input, file: e.target.files[0] })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('fullName', input.fullName)
    formData.append('email', input.email)
    formData.append('phoneNumber', input.phoneNumber)
    formData.append('password', input.password)
    formData.append('role', input.role)
    if (input.file) {
      formData.append('file', input.file)
    }
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate('/login')
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'something we wrong')
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label htmlFor="fullName"> Full Name</Label>
            <Input
              type="text"
              id="fullName"
              value={input.fullName}
              name="fullName"
              onChange={changeEventHandler}
              placeholder="Your Name"
            />
          </div>
          <div className="my-2">
            <Label>email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="@gmail.com"
            />
          </div>

          <div className="my-2">
            <Label> Phone number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="123456789 "
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

          <div className=" ">
            <RadioGroup className="flex items-center justify-beween">
              <div className="flex items-center gap-3">
                <input
                  id="student"
                  type="radio"
                  name="role"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="student">student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="recruiter"
                  type="radio"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">recuriter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <label>Profile</label>
              <input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer text-blue-700"
              />
            </div>
          </div>
          {loading ? (
            <Button className="m-4 w-full">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Please wait{' '}
            </Button>
          ) : (
            <Button className="w-full my-4 bg-green-700" type="submit">
              Sign UP
            </Button>
          )}

          <span className="text-sm">
            Already have an account{' '}
            <Link to="/login" className="text-blue-500">
              Login Page
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Signup
