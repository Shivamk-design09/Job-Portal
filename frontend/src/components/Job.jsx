import { Bookmark } from 'lucide-react'
import {Badge} from "./ui/badge"
import React, { useState } from 'react'
import { Button } from './ui/button'
import {Avatar,AvatarImage} from './ui/avatar'
import { Ghost } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { bookmarkJob } from '../redux/applicationApi'

const Job = ({ job }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.auth)
  const [isBookmarked, setIsBookmarked] = useState(job?.bookmark || false)

  const handleBookmark = () => {
    dispatch(bookmarkJob(job._id))
    setIsBookmarked(!isBookmarked)
  }

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime)
    const currentTime = new Date()
    const timeDifference = currentTime - createdAt
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60))
  }

  return (
    <div className='border rounded p-5 hover:shadow-2xl shadow-blue-200 hover:translate-y-1 hover:bg-emerald-100  tracking-normal transition-normal'>
      <div className='flex items-center justify-between'>
      <p className='text-gray-500 text-sm'> {daysAgoFunction(job?.createdAt)} days ago</p>
       <Button variant='outline' size='icon' className="rounded-full" onClick={handleBookmark}>
         <Bookmark className={isBookmarked ? 'text-blue-500' : ''}/>
       </Button>
      </div>

     <div className='flex items-center gap-2 my-2'>
       <Button className=" p-6" variant="outline" size='icon'>
        <Avatar>
          <AvatarImage src={job?.company?.logo || "https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"}/>
        </Avatar>
       </Button>
       <div className='px-5'>
        <h2>{job?.company?.name}</h2>
        <p>{job?.location}</p>
       </div>
     </div>
     <div>
      <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
      <p className='text-sm text-gray-400'>{job?.description}</p>
     </div>
     <div className='flex items-center gap-2  mt-4'>
            <Badge className={'hover:bg-blue-200 font-bold'} variant="ghost">{job?.position} positions</Badge>
            <Badge className={'hover:bg-blue-200 font-bold'} variant="ghost">{job?.jobType}</Badge>
            <Badge className={'hover:bg-blue-200 font-bold'} variant="ghost">{job?.salary} LPA</Badge>
        </div>
        <div className='py-5 flex justify-between'>
          <Button onClick={()=>navigate(`/description/${job?._id}`)} className={"hover:bg-emerald-200"} variant='outline'>Details</Button>
          <Button onClick={handleBookmark} className={"hover:bg-red-400"} variant='outline'>{isBookmarked ? 'Saved' : 'Save for Later'}</Button>
        </div>
    </div>
  )
}

export default Job