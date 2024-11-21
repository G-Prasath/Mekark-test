import React from 'react'
import Heading from '../Common/Heading/Heading'

const PrimaryFrameStructure = () => {
  return (
    <div className='w-full sec-padding'>
       <Heading title="Primary Frame Structures" secTitle="Work Flows" />
      <div className='w-full mt-5'>
        <img className='w-full h-[500px]' src="https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg" alt="" />
      </div>

    <div className='w-full flex justify-center items-center'>
      <p className='w-3/4 text-center'>Primary members are the main steel frames of PEB. The main frames include columns, rafters, crane beams, mezzanine beams and other supporting members. The sections are fabricated with High strength steel plates using the state-of-the-art manufacturing technology.</p>
      </div>
    </div>
  )
}

export default PrimaryFrameStructure
