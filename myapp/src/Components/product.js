import React from 'react'
import Card from './Card'

export default function Product({data,setCart}) {
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex gap-3 flex-wrap w-[90%] sm:w-[80%]'>
      <h1 className="w-full mt-2 font-bold text-2xl">All Categories</h1>
        {data.map(it=>(
        <Card key={it._id} setCart={setCart} data={it}/>
        ))}
      </div>
      </div>
  )
}
