import axios from 'axios';
import React, { useState } from 'react'
import { baseUrl } from '../utils/baseurl';
import Sidebar from './Sidebar'

export default function CreateProduct() {
  const [Name,setName]=useState('');
  const [Categories,setCategoris]=useState('');
  const [Price,setPrice]=useState('');
  const [Offer,setOffer]=useState('');
  const [Total,setTotal]=useState('');
  const [Details,setDetails]=useState('');
  const [productPhotos,setproductPhotos]=useState([])
 
 async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append('Categories',Categories);
    form.append('Name',Name);
    form.append('Price',Price);
    form.append('Offer',Offer);
    form.append('Total',Total);
    form.append('Details',Details);
   
    for (let pic of productPhotos) {
      form.append("productPhotos", pic);
    }
      try{
        const res=await axios.post(`${baseUrl}/createproduct`,form);
        if(res.status===201){
           setCategoris('');
           setName('');
           setDetails('');
           setOffer('');
           setPrice('');
           setTotal('');
           setproductPhotos([]);
           
          }
      }catch(err){
    }
  }
  return (
    <div className='flex w-[full] gap-x-3'>
    <div className='bg-white shadow-lg w-[15%]'>
        <Sidebar/>
      </div>
      <div className='w-[99%] bg-white shadow-lg flex justify-center '>
      <form className='w-[80%]' onSubmit={handleSubmit}>
      <label
              htmlFor="Categories"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
             Categories
            </label>
            <input
              name="Categories"
              placeholder="Categories"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={Categories}
              id="Categories"
              onChange={(e)=>setCategoris(e.target.value)}
              required
            />
            <label
              htmlFor="Name"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Name
            </label>
            <input
              name="Name"
              placeholder="Name"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={Name}
              id="Name"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <label
              htmlFor="Price"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Price
            </label>
            <input
              name="Price"
              placeholder="Price"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={Price}
              id="Price"
              onChange={(e)=>setPrice(e.target.value)}
              required
            />
            <label
              htmlFor="Offer"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Offer
            </label>
            <input
              name="Offer"
              placeholder="Offer"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={Offer}
              id="Offer"
              onChange={(e)=>setOffer(e.target.value)}
              required
            />
            <label
              htmlFor="Total"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Total
            </label>
            <input
              name="Total"
              placeholder="Total"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={Total}
              id="Total"
              onChange={(e)=>setTotal(e.target.value)}
              required
            />
              <label
              htmlFor="Details"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Details
            </label>
            <input
              name="Details"
              placeholder="Details"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={Details}
              id="Details"
              onChange={(e)=>setDetails(e.target.value)}
              required
            />

            <label className="block mb-2 text-sm font-medium
             text-gray-900 dark:text-white" 
             htmlFor="productPhotos">Upload multiple files
             </label>
         <input className="block w-full text-sm
          text-gray-900 border border-gray-300
           rounded-lg cursor-pointer bg-gray-50
            dark:text-gray-400 focus:outline-none
             dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400" 
              id="multiple_files" type="file" 
              multiple
              required
              name='productPhotos'
              onChange={(e)=>setproductPhotos([...productPhotos,e.target.files[0]])}
              />

      <button type='submit' className='bg-green-700 p-2 rounded-lg mt-2 mb-2 text-white' >Create New Product</button>
        
    </form>
      </div>
    </div>
  )
}
