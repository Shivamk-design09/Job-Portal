/* eslint-disable no-unused-vars */
import { Search } from 'lucide-react'
import {Button} from './ui/button'
import React from 'react'

const HeroSection = () => {
  const suggestions = [
    'React',
    'Redux',
    'JavaScript',
    'Java',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Next.js',
  ]
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-5">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 font-medium text-[#f38002]">
          Find Jobs
        </span>
        <h1 className="text-5xl font-bold animate-float transition-transform duration-300
  hover:-translate-y-3">
          Search,Apply & <br />
          Get Your <span className="text-purple-600">Dream job</span>
        </h1>
        <p>
          <h2
            className='font-bold text-emerald-500 text-4xl'>
            Best plateform to find jobs as per your skills and needs
          </h2>
        </p>
        <div className="flex w-[40%] shadow-lg border-gray-400 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream job"
            className="outline-none border-none w-full"
          />
          <Button className='rounded-r-full bg-[#6A38c2]'>
            <Search className='h-5 w-5'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
