import React,{useState, useEffect} from 'react'
import tmdbAxios from '../tmdbAxios'
import './Products.css'

function Products({title,fetchUrl}) {
    const [allProducts,setAllProducts]=useState([])
    const base_url_img=''
        const fetchData=async()=>{
        const response= await tmdbAxios.get(fetchUrl)
        setAllProducts(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(allProducts)
  return (
    <div className='product'>
        <h1 className='title'>{title}</h1>
        <div className="under-line">
            <div className=""></div>
        </div>
        <div className="product-row">
            {
                allProducts?.map((item)=>(
                    <>
                     <div className="product-div">
                     <img className='product-img' src={`${base_url_img}${item.image}`} alt="no image" />
                        
                        <h5>{item.title}</h5>
                        <p>₹ {item.price}</p>

                     </div>
                    </>
                   
                ))
            }
        </div>
    </div>
  )
}

export default Products