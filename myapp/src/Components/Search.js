import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';

export default function Search({data,setCart}) {
  const {pattern} =useParams();
  const arr=data.filter(it=>it.Name.toLowerCase().includes(pattern.toLocaleLowerCase()))
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex gap-3 flex-wrap w-[90%] sm:w-[80%]'>
      <h1 className="w-full mt-2 font-bold text-2xl">Search Result</h1>
       {arr.length===0 && <h1>Not Found any Product</h1>}
        {arr.length>0 && arr.map(it=>(
        <Card key={it._id} setCart={setCart} data={it}/>
        ))}
      </div>
      </div>
  )
}
