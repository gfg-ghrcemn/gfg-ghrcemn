import React from 'react'
import HeroSection from '../components/HeroSection'
import EventSection from '../components/EventSection'
import AboutSection from '../components/AboutSection'
import TeamSection from '../components/TeamSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <EventSection/>
        <TeamSection/>
    </div>
  )
}

export default Home