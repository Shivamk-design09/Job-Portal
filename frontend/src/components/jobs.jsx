/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Filtercard from './Filtercard'
import Job from './job'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../redux/jobApi'

const jobs = () => {
  const { allJobs, searchedQuery } = useSelector(store => store.job)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-5">
        <div className='flex gap-5'>
          <div> 
          <Filtercard />
          </div>
          {
            allJobs.length <= 0 ? <span>No jobs found, please retry</span>: (
              <div className='flex-1 h-[88vh] overflow-y-auto  pb-5'>
                <div className='grid grid-cols-3 gap-3'>
                  {
                    allJobs?.map((job)=>(
                      <div key={job._id}>
                        <Job job={job}/>
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
