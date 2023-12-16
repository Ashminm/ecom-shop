import React, {useState} from 'react'
import './Navigation.css'

function Navigation() {
  const [show,setshow]=useState(0)
  window.addEventListener('scroll',()=>{
      if(window.scrollY>400){
        setshow(true)
      }else{
        setshow(false)
      }
  })
  return (
    <div className={`nav ${show && 'nav-background'}`}>
          <h1 title='Sky'>SKY</h1>
          <div className={`nav-a ${show && 'nav-background'}`}>
            <a href="#">men</a>
            <a href="#">Women</a>
            <a href="#">Acceseries</a>
          </div>   
    </div>
  )
}

export default Navigation