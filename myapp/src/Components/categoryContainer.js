import React from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';

export default function CategoryContainer({data,setCart}) {
  const {name} =useParams();
    
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex gap-3 flex-wrap w-[90%] sm:w-[80%]'>
        {data.filter(it=>it.Categories===name).map(it=>(
        <Card key={it._id} setCart={setCart} data={it}/>
        ))}
      </div>
      </div>
  )
}
