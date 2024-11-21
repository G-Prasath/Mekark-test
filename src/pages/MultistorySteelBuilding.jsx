import React from 'react'
import ServiceBanner from '../components/Common/ServiceBanner'
import { MultistorySteelBuildingData as allData } from '../data/ServicesData'
import Profile from '../components/Services/Profile'
import WhyChoose from '../components/Services/WhyChoose'
import FAQ from '../components/Services/Faq'
import Gallery from '../components/Services/Gallery'
import ContactForm from '../components/Services/ContactForm'
import Applications from '../components/Common/Applications'
import Benifites from '../components/Services/Benifites'
import ServiceForm from '../components/Services/ServiceForm'
import Diffrence from '../components/Services/Diffrence'
const MultistorySteelBuilding = () => {
  return (
    <div>
      <ServiceBanner data={allData.banner} />
      <Profile data={allData.profile}/>
      <Diffrence/>
      <Benifites/>
      <WhyChoose />
      <Applications data={allData.Applications} />
      <FAQ data={allData.Faqs} />
      <Gallery data={allData.gallery} />
      <ServiceForm/>
    </div>
  )
}

export default MultistorySteelBuilding
