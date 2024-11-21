import React from 'react'
import Hero from '../components/Hero/Hero'
import LatestCollection from '../components/latest/LatestCollection'
import BestSeller from '../components/BestSeller/BestSeller'

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    </>
  )
}

export default Home