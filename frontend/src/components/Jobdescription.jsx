/* eslint-disable no-unused-vars */
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const Jobdescription = () => {
  const isApplied = true 
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
       <div>
          <h1 className='font-bold text-xl '>Frontend DEveloper </h1>
            <div className=' flex items-center gap-2 mt-4'>
               <Badge className={'text-blue-700 font-bold'} variant="ghost">Part Time </Badge>
               <Badge className={'text-blue-700 font-bold'} variant="ghost">24 lpa </Badge>
               <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Position </Badge>
            </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? "text-gray-600 text-amber-50 cursor-not-allowed": 'text-green-500 bg-amber-100 cursor-pointer'}`}>{isApplied ? 'Already applied' :'Apply here'}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-5 '>Job description </h1>
      <div className='my-5'>
        <h1 className='font-bold my-1'> Role : <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'> Location : <span className='pl-4 font-normal text-gray-800'>Delhi</span></h1>
        <h1 className='font-bold my-1'>Description : <span className='pl-4 font-normal text-gray-800'>Frontend Developer be profience in lazy loading</span></h1>
        <h1 className='font-bold my-1'> Experience : <span className='pl-4 font-normal text-gray-800'>2 years</span></h1>
        <h1 className='font-bold my-1'>salary : <span className='pl-4 font-normal text-gray-800'>12 Lpa </span></h1>
        <h1 className='font-bold my-1'> Total Applicants : <span className='pl-4 font-normal text-gray-800'>4</span></h1>
        <h1 className='font-bold my-1'> Post Date : <span className='pl-4 font-normal text-gray-800'>12-09-2025</span></h1>    
      </div>
    </div>
  )
}

export default Jobdescription