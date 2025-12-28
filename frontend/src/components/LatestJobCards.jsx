import React from 'react'
import {Badge} from "./ui/badge"

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-2xl bg-white border border-gray-100 cursor-pointer'>
        <div>   
        <h1 className='font-bold text-lg'>Company Name</h1>
        <p className='font-bold'> India </p>
        </div>
        <div>
            <h2 className='font-bold'>job title</h2>
            <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet. consectetur adipisicing elit. Necessitatibus, accusamus.</p>
        </div>
        <div className='flex items-center gap-2  mt-4'>
            <Badge className={'text-blue-300 font-bold'} variant="ghost">12 postion</Badge>
            <Badge className={'text-blue-300 font-bold'} variant="ghost">part time</Badge>
            <Badge className={'text-blue-300 font-bold'} variant="ghost">24 lpa </Badge>
        </div>
    </div>
  )
}

export default LatestJobCards