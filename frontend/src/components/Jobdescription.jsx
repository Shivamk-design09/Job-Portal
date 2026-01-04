/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleJob } from '../redux/jobApi'
import { applyJob } from '../redux/applicationApi'

const Jobdescription = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { singleJob } = useSelector(store => store.job)
  const { user } = useSelector(store => store.auth)
  const [isApplied, setIsApplied] = useState(false)

  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [id, dispatch])

  const applyJobHandler = () => {
    dispatch(applyJob(id))
    setIsApplied(true)
  }

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime)
    const currentTime = new Date()
    const timeDifference = currentTime - createdAt
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60))
  }

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
       <div>
          <h1 className='font-bold text-xl '>{singleJob?.title}</h1>
            <div className=' flex items-center gap-2 mt-4'>
               <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
               <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.salary} LPA</Badge>
               <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} Positions</Badge>
            </div>
        </div>
        <Button disabled={isApplied} onClick={applyJobHandler} className={`rounded-lg ${isApplied ? "text-gray-600 text-amber-50 cursor-not-allowed": 'text-green-500 bg-amber-100 cursor-pointer'}`}>{isApplied ? 'Already applied' :'Apply here'}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-5 '>Job description </h1>
      <div className='my-5'>
        <h1 className='font-bold my-1'> Role : <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-1'> Location : <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-1'>Description : <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-1'> Experience : <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel} years</span></h1>
        <h1 className='font-bold my-1'>Salary : <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
        <h1 className='font-bold my-1'> Total Applicants : <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
        <h1 className='font-bold my-1'> Post Date : <span className='pl-4 font-normal text-gray-800'>{daysAgoFunction(singleJob?.createdAt)} days ago</span></h1>
      </div>
    </div>
  )
}

export default Jobdescription