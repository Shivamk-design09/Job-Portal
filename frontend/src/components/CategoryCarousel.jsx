/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from './ui/button'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const catogory = [
  'ForntEnd Developer',
  'Backend Developer',
  'FullStack Seveloper',
  'Data Science ',
  'UI Designer',
  'Devops Engineer',
  'Cloud Enginner',
  'AWS Engineer',
  'System Design Engineer',
]

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className='w-full max-w-xl mx-auto my-20'>
        <CarouselContent>
          {catogory.map((cat, index) => (
            <CarouselItem key={index} className='md:basis-1/2 ls-basis-1/3' >
              <Button variant='ghost' >{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
