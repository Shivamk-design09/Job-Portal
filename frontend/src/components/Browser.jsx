/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './shared/Navbar'
import Job from './job'

const randomJobs = [1, 2, 3, 4, 5, 6, 7]

const Browser = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h3 className="font-bold text-xl">search result {randomJobs.length}</h3>
        <div className="grid  grid-cols-3 gap-4">
          {randomJobs.map((item, index) => {
            return <Job />
          })}
        </div>
      </div>
    </div>
  )
}

export default Browser
