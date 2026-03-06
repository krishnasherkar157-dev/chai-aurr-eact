import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'

function LeftContent() {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
        <Hero/>
        <Arrow/>
    </div>
  )
}

export default LeftContent