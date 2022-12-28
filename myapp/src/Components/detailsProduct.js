import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css"


import { generatePublicUrl } from '../utils/baseurl';

export default function DetailsProduct({data}) {
  
  const {id} =useParams();
  const product=data.filter(it=>it._id===id);
  const arr=product[0]?.Details?.split('.');
  console.log(arr)
  return (
    <div>
      {product.length===0 && <h1 className='text-center'>Not Found</h1>} 
      {product.length>0 && 
        <div className='flex justify-center'>
          <div className='w-[90%] sm:w-[80%] p-2'>
            <div className='flex flex-wrap sm:flex-nowrap gap-4'>
                <div className='w-[100%] sm:w-[49%]'>
                <Carousel showArrows={true} className=''>
                 {product[0]?.productPhotos.map((it,index)=>(
                 <div key={index} className=''>
                     {<img className=' w-full h-[400px]' src={generatePublicUrl(it)}/>}
                 </div> 
                  ))} 
                </Carousel>
                </div >
                <div className=' w-[100%] sm:w-[49%]'>
                  <h1 className='font-bold mt-3 mb-5'>{product[0].Name}</h1>
                  <p>Category : {product[0].Categories}</p>
                  <p className='line-through'>Price : {product[0].Price}TK</p>
                  <p >Offer : {product[0].Offer}%</p>
                  <p className=''>Price : {product[0].calculatePrice}TK</p>
                  <p>Save per product : {product[0].Price-product[0].calculatePrice}TK</p>
                  <button className='mt-3 sm:mt-[200px] text-white hover:opacity-90 w-[150px] mb-3 sm:mx-5 bg-[#22c55e] p-2 rounded-lg'>Add To Cart</button>
              </div>
            </div>
            
            <div>
            <h1>Details : </h1>
             <ul className='list-disc'>
              {arr.map((it,index)=>(
              it.length>0 && <li key={index}>{it}</li>
             ))}</ul>
            </div>
          </div>
        </div>}
    </div>
  )
}
