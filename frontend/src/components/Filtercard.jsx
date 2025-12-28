/* eslint-disable no-unused-vars */
import React from 'react'
import {RadioGroup, RadioGroupItem} from './ui/radio-group'
import { Label } from '@radix-ui/react-label'

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi','Pune','Mumbai','Bangalore','Hyderabad','Chennai','Ahmedabad',],
  },
  {
    filterType:"Industry",
    array:["Backend Developer", "Frontend Developer", "Full Stack Developer", "MERN Stack Developer", "Java Developer", "Python Develope","DevOps Engineer", "Software Engineer"]
  },
  {
      filterType:'salary',
      array:["0-40k","5-8lakh","28-27lakh","24-34lakh"]
  }
]
const Filtercard = () => {
  return(
    <div className='w-full  bg-white p-3 rounded-md'>
        <h2 className='font-bold'>Filter Jobs</h2>
        <hr  className='mt-5' />
        <RadioGroup>
            {
                filterData.map((data,index)=>(
                    <div>
                        <h2 className='font-bold'>{data.filterType}</h2>
                        {
                            data.array.map((item,index)=>{
                                return (
                                    <div className='flex space-x-2 my-2 items-center'>
                                        <RadioGroupItem value={item}/>
                                        <Label>{item}</Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default Filtercard
