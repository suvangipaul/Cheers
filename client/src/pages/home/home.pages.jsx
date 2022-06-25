import React from 'react'
import "./home.styles.css";
import { Main, newImage, newImage2 } from '../../assets'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-main">
        <img src={Main} alt="" />
        <h1>Cheers - Taste the thrill</h1>
      </div>
      <div className='gap1'></div>
      <hr className='main-line' />

      <div className="main-new">
        <div className="new-left">
          <div className="blur1"></div>
          <img src={newImage} alt="" />
          <div className="blur2"></div>
        </div>
        <div className="new-text">
          <h2 className='text-title'>What's New?</h2>
          <p className='para-first'>
          Explore the widest variety of signature drinks of top-notch bars.
          </p>
          <p className="para-sec">
          Enjoy the special drinks curated for you to relieve yourself in summers heat
          </p>
          <button className='new-book'>BOOK A SEAT</button>
        </div>
      </div>

      <div className="main-serve">
        <div className="serve-text">
          <p className='stext-1'>Coming forward and providing your hand of support to the charity funds </p>
          <p className="stext-2">2000+</p>
          <p className="stext3">Serving food to many houses in rural parts of the country</p>
        </div>
        <div className="serve-image">
          <div className="blur3"></div>
          <img src={newImage2} alt="" />
          <div className="blur4"></div>
        </div>
      </div>
    </div>
  )
}

export default Home