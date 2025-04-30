import React from 'react'
import drtirtahome from '../../assets/img/drtirtahome.png'
import banner from '../../assets/img/banner.png'

const Home = () => {
  return (
    <div className="banner">
    <img
      src={banner}
      alt="Banner"
      className="banner-image"
    />
    <div className="banner-text">
      <h1>Queue online for better experiences</h1>

    </div>
    <img
      src={drtirtahome}
      alt="doctor-banner"
      className="doctorhome-image"
      />
  </div>
  )
}

export default Home
