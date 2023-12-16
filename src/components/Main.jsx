import React from 'react'
import './Main.css'

function Main() {
    // const man = require('./public/man.jpg')
  return (
    <>
    <div className="maeguee-d">
    <marquee behavior="scroll" scrollamount="15" direction="left" style={{marginTop:'20px'}}>
        <img src="../image/M.png" width="120" height="40" alt="No image" />
        <img src="../image/A.png" width="120" height="40" alt="No image" />
        <img src="../image/Ajio.png" width="120" height="40" alt="No image" />
        <img src="../image/meesho.png" width="120" height="40" alt="No image" />
        <img src="../image/lifestyle.png" width="120" height="40" alt="No image" />
        <img src="../image/R.png" width="120" height="40" alt="No image" />
        <img src="../image/shopsy.webp" width="120" height="40" alt="No image" />
    </marquee>
    

    </div>
    
    <div className='parant'>
        <div className='main-parant'>
            <div className="main-div">
                <img src="image/man.jpg" alt="no image" />
                    <div className='img-text'>
                    <h2>Latest Eyewear For You</h2>
                    <p>Lorem ipsum dolor sit elit. <br /> 
                          doloribus eaque.</p>
                          <a href="#">Shop Now</a>
                    </div>
            </div>
            <div className="main-div">
            <img src="image/woman.jpg" alt="no image" />
                <div className='img-text'>
                    <h2>20% Off On Net Top</h2>
                    <p>Lorem ipsum dolor sit elit. <br /> 
                          doloribus eaque.</p>
                          <a href="#">Shop Now</a>
                </div>
            </div>
            <div className="main-div">
            <img src="image/jwellary.jpg" alt="no image" />
                <div className='img-text'>
                    <h2>Let's Wear</h2>
                    <p>Lorem ipsum dolor sit elit. <br /> 
                          doloribus eaque.</p>
                          <a href="#">Check out</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
    
    
  )
}

export default Main