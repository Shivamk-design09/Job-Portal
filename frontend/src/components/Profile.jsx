/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "./shared/Navbar"
import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import AppliedJobTable from './AppliedJobTable'
import { useState } from 'react'
import UpdateProfileDialog from './UpdateProfileDialog'

const skills = [ "HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "Git", "GitHub", "Tailwind CSS", "REST APIs", "Authentication", "Problem Solving", "Data Structures & Algorithms" ];
const isResume = true
const Profile = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Navbar/>
      <div className=' max-w-4xl mx-auto bg-white border  border-gray-200 rounded-2xl  my-5 p-8' >
        <div className='flex justify-between'>

        <div className='flex items-center'>
          <Avatar className=" h-23 w-24">
          <AvatarImage src="https://github.com/shadcn.png" atl="profile"/>
        </Avatar>
        <div>
        <h1 className='font-medium text-xl'>Full Name</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quod. </p>
        </div>
        </div>
        <Button  onClick={()=>setOpen(true)} className='text-right' variant='outline'><Pen/> Edit profile</Button>
        </div>
        <div >
          <div className='flex  items-center gap-5'>
          <Mail/>
          <span>ganesh@gmaill.com</span>
          </div>
          <div className='flex items-center gap-5'>
          <Contact/>
          <span>885500499</span>
          </div>
          <div>
          <h1>Skill</h1>
          <div className='gap-3 flex flex-wrap max-w-3xl overflow-hidden'>
              {
               skills.length != 0? skills.map((items,index)=>(
                  <Badge key={index}>{items}</Badge>
                )) : <span>Please add skill</span>
              }
          </div>
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <label className='text-md font-bold'>Resume</label>
            {
              isResume ? <a className='text-blue-400 hover:underline cursor-pointer' target='blank' href="https:youtube.com">Resume</a> : <span> add resume</span>
            }
          </div>
        </div>
      </div>
       <div className='max-w-4xl mx-auto  bg-white rounded-2xl'>
            <h2 className='font-bold text-lg my-5'>Applied Jobs</h2>
            <AppliedJobTable/>
       </div>
       <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile