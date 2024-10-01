import React from 'react'
import Header from '../components/common/Header/Header'
import LandingPage from '../components/LandingPage/LandingPage'
import AlertMsg from '../Alert'
import OgCreators from '../components/OgCreators/OgCreators'

const Home = () => {

  return (
    <>
      <AlertMsg/>
      <Header/>
      <LandingPage/>
      <OgCreators/>
    </>
  )
}

export default Home
