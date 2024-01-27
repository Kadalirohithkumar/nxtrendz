import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='top_banner'>
        <div className='content'>
          <div className='info'>
            <h2>Most Trending T shirts from: nxtrendz</h2>
            <p>Get Three T shits at <span>Rs 999</span></p>
            <Link to='/products'><button>Discover Now</button></Link>
          </div>
          <div className='img_box'>
            <img  src='images/tshirts.jpg' alt='img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home