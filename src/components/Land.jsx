import React,{useState, useEffect} from 'react'
import tmdbAxios from '../tmdbAxios'
import './Products.css'
import './Land.css'

function Land({fetchUrl}) {
  const [allProducts,setAllProducts]=useState([])
    const base_url_img=''
        const fetchData=async()=>{
        const response= await tmdbAxios.get(fetchUrl)
        setAllProducts(response.data[Math.floor(Math.random()*response.data.length)])
        // console.log(Math.floor(Math.random()*response.data.length))
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(allProducts)
  return (
    <div className='land' style={{height:'600px', width:'100%',
    backgroundImage: `url(${base_url_img}${allProducts.image})`  }}>
        <div className='land-content'>
          <h1>{allProducts.title}</h1>
          <h2>{allProducts.category}</h2>
          <h3>₹{allProducts.price}</h3>
          <p>{allProducts.description}</p>
                <div className="land-shop">
                    <a className='l1' href="#">Shop now</a>
                    <a className='l2' href="#">Find more</a>
                </div>
        </div>
        
    </div>
  )
}

export default Land