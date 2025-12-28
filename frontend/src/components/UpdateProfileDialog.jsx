/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "./ui/dialog" 
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import {USER_API_END_POINT} from '../utils/constant'
import axios from 'axios'
import { setUser } from '../redux/authslice'
import { toast } from 'sonner'
const UpdateProfileDialog = ({open ,setOpen}) => {
    // we need to show the data on edit so use knwo which data he is going to change
    const [loading, setloading] = useState(false)
    // here we are getting the user data from store auth
    //hamesha data lene ke liye store ke andar jo reducer bana h usme se data ayega
    const {user} = useSelector(store => store .auth)
    // we are updating the user in redux store after getting the data in update profile
    const dispatch = useDispatch()
    const [input, setinput] = useState({
        fullName:user?.fullName || "",
        email:user?.email || "",
        phoneNumber:user?.phoneNumber ||"",
        bio:user?.profile?.bio || "",
        skills:user?.profile?.skills?.map(skills => skills) || "",
        file:user?.profile?.resume || "",
    })
    const changeEventHandler =(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    // making an handler for file event
    const fileChangeHandler = (e)=>{
        const file = e.target.files?.[0]
        setinput({...input,file})
    }
    const submitHandler = async(e)=>{ 
        e.preventDefault()
        // creaet a FormData because sending file in json is not possible 
        // send image an file using FromData 
        const formData = new FormData()
        formData.append("fullname",input.fullName)
        formData.append("email",input.email)
        formData.append("phoneNumber",input.phoneNumber)
        formData.append("bio",input.bio)
        formData.append("skills",input.skills)
        //for file we are checking weather it is upload ot not
        if(input.file){
            formData.append("file",input.file)
        }       
        try{
            // after appending the data we will send back to the backend
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`,
                formData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                },
                withCredentials:true
            })
            if(res.data.success){
                // after gettting the data dispatch the user
                dispatch(setUser(res.data.user))
                toast.success(res.data.message)
            }}catch(error){
            console.log(error)
            toast.error(error.res.data.message)}
        setOpen(false)
        console.log(input)
    }
  return (
    <div>
        <Dialog open={open}>                           
                <DialogContent className='sm:max-w-[425px]' onInteractOutside={()=>setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update profile</DialogTitle>
                    </DialogHeader  >
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'> 
                            <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='name' className=''>Name</label>
                            <input
                             type="text"
                             value={input.fullName}
                             id='name'
                             name='name' 
                             onChange={changeEventHandler}
                             className='col-span-3 border    '
                             />
                            </div>

                             <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='email' className=''>Email</label>
                            <input
                             type="email"
                             value={input.email}
                             id='email'
                             name='email' 
                             onChange={changeEventHandler}
                             className='col-span-3 border    '
                             />
                            </div>

                             <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='number' className=''>Number</label>
                            <input
                             id='number'
                             value={input.phoneNumber}
                             name='number' 
                             onChange={changeEventHandler}
                             className='col-span-3 border    '
                             />
                            </div>
                             <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='bio' className=''>Bio</label>
                            <input
                             type="text"
                             value={input.bio}
                             id='bio'
                             name='bio' 
                             onChange={changeEventHandler}
                             className='col-span-3 border    '
                             />
                            </div>
                             <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='skills' className=' '>Skill</label>
                            <input
                             type="text"
                             value={input.skills}
                             id='skills'
                             name='skills' 
                             onChange={changeEventHandler}
                             className='col-span-3 border    '
                             />
                            </div>
                             <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='file' className=''>Resume</label>
                            <input
                             id='file'
                             type="file"
                             name='file'
                             onChange={fileChangeHandler}
                             accept='application/pdf'
                             className='col-span-3 border    '
                             />
                            </div>
                        </div>
                        <DialogFooter>{
                             loading ? <Button className="w-full m-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait </Button>:
                                        <Button className="w-full my-4 bg-green-700" type="submit">
                                       Login
                                     </Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
        </Dialog>      
    </div>
  )
}
export default UpdateProfileDialog