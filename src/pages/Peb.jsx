import React from 'react'
import ServiceBanner from '../components/Common/ServiceBanner'
import { Peb as allData } from '../data/ServicesData'
import Profile from '../components/peb/Profile'
import Applications from '../components/Common/Applications'

import PebForm from '../components/peb/PebForm'
import WhyChoose from '../components/peb/WhyChoose'
import SpaceFrameTypes from '../components/peb/SpaceFrameTypes'
import PrimaryFrameStructure from '../components/peb/PrimaryFrameStructure'
import Acciories from '../components/peb/Acciories'
import PebApp from '../components/peb/PebApp'
import PebGallery from '../components/peb/PebGallery'
import PebTestimonials from '../components/peb/PebTestimonials'
import PebFAQ from '../components/peb/PebFAQ'

const Peb = () => {
  return (
    <div>
     <ServiceBanner data={allData.banner} />
     <Profile/>
     <PrimaryFrameStructure/>
     <SpaceFrameTypes/>
     <PebApp/>
     <WhyChoose/>
     <Acciories/>
     <PebGallery/>
     <PebFAQ/>
     <PebTestimonials/>
     <PebForm/>
    </div>
  )
}

export default Peb
