/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './shared/Navbar'
import Filtercard from './Filtercard'
import Job from './job'

const jobs = () => {
  const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-5">
        <div className='flex gap-5'>
          <div> 
          <Filtercard />
          </div>
          {
            JobsArray.length <= 0 ? <spane>no jobs found please please retry</spane>: (
              <div className='flex-1 h-[88vh] overflow-y-auto  pb-5'>
                <div className='grid grid-cols-3 gap-3'>
                  {
                    JobsArray.map((item,index)=>(
                      <div key={index}>
                        <Job/>
                      </div>
                    ))
                  }
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default jobs
