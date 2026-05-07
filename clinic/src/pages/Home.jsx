import React from 'react'
import Hero from '../sections/home/Hero'
import AboutUS from '../sections/home/AboutUS'
import FeaturedService from '../sections/home/FeaturedService'
import FeaturedDepartment from '../sections/home/FeaturedDepartment'
import FindDoctor from '../sections/home/FindDoctor'
import History from '../sections/home/History'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutUS/>
        <FeaturedDepartment/>
        <FeaturedService/>
        <FindDoctor/>
        <History/>
    </>
  )
}

export default Home