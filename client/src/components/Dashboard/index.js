import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import Personal from '../Personal'
import Footer from '../Footer'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Personal/>
      <Footer/>
    </div>
  )
}

export default Dashboard
