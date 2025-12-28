import { Bookmark } from 'lucide-react'
import {Badge} from "./ui/badge"
import React from 'react'
import { Button } from './ui/button'
import {Avatar,AvatarImage} from './ui/avatar'
import { Ghost } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Job = () => {
  const navigate = useNavigate()
  const jobId = 'rqerffffqgqr5414'
  return (
    <div className='border rounded p-5 hover:shadow-2xl shadow-blue-200 hover:translate-y-1 hover:bg-emerald-100  tracking-normal transition-normal'>
      <div className='flex items-center justify-between'>
      <p className='text-gray-500 text-sm'> 2 days ago posted</p>
       <Button variant='outline' size='icon' className="rounded-full "><Bookmark/></Button>
      </div>

     <div className='flex items-center gat-2 my-2'>
       <Button className=" p-6" variant="outline" size='icon'>
        <Avatar>
          <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"/>
        </Avatar>
       </Button>
       <div className='px-5'>
        <h2> company name</h2>
        <p>India</p>
       </div>
     </div>
     <div>
      <h1 className='font-bold text-lg my-2'>Title </h1>
      <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, cum.</p>
     </div>
     <div className='flex items-center gap-2  mt-4'>
            <Badge className={'hover:bg-blue-200 font-bold'} variant="ghost">12 postion</Badge>
            <Badge className={'hover:bg-blue-200 font-bold'} variant="ghost">part time</Badge>
            <Badge className={'hover:bg-blue-200 font-bold'} variant="ghost">24 lpa </Badge>
        </div>
        <div className='py-5 flex justify-between'>
          <Button onClick={()=>navigate(`/description/${jobId}`)} className={"hover:bg-emerald-200"} variant='outline'>Details</Button>
          <Button className={"hover:bg-red-400"} variant='outline'>Save for Later</Button>
        </div>
    </div>
  )
}

export default Job