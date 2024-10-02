import React from 'react'
import HeroSection from '../components/HeroSection'
import EventSection from '../components/EventSection'
import AboutSection from '../components/AboutSection'
import TeamSection from '../components/TeamSection'
import Contactus from '../components/Contactus'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <EventSection/>
        <TeamSection/>
        <Contactus/>
    </div>
  )
}

export default Home