/* eslint-disable no-unused-vars */
import React from 'react'
import LatestJobCards from './LatestJobCards'

const randomjobs = [1,2,3,4,5,6,7,8,9]
const LatestJob = () => {
  return (
    <div className='max-w-7xl  mx-auto my-20'>
      <h1 className="text-4xl font-bold">Latest & Top
        <span className="text-blue-700"> Job Opening</span>
      </h1>
      <div className='grid grid-cols-3 gap-4 my-5 '>
         {
        randomjobs.slice(0,6).map((item,index)=><LatestJobCards/>)
      }
      </div>
    </div>
  )
}

export default LatestJob
