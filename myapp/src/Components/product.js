import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card'

export default function Product({data,setCart}) {
    const role= Cookies.get('role');
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex gap-3 flex-wrap w-[90%] sm:w-[80%]'>
      {role==='admin' && <Link className='bg-green-700 rounded-lg p-2 text-white' to={'/admin/createproduct'}>Create New Product </Link>}
      <h1 className="w-full mt-2 font-bold text-2xl">All Categories</h1>
        {data.map(it=>(
        <Card key={it._id} setCart={setCart} data={it}/>
        ))}
      </div>
      </div>
  )
}
