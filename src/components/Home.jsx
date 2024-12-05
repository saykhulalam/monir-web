import React from 'react'
import Banner from '../components/Banner'
import About from './About'
import ProducatPage from './ProducatPage'
import Methai from './Methai'

const Home = () => {
  return (
    <div>
      <Banner/>
      <ProducatPage/>
      <About/>
      <Methai/>
    </div>
  )
}

export default Home
