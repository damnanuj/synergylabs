import React from 'react'
import Header from '../components/common/Header/Header'
import LandingPage from '../components/LandingPage/LandingPage'
import AlertMsg from '../Alert'

const Home = () => {

  return (
    <>
    <AlertMsg/>
    <Header/>
    <LandingPage/>
    </>
  )
}

export default Home
