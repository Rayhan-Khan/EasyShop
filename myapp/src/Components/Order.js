import React from 'react'
import { Link } from 'react-router-dom';
import order from '../Data/order';
import Sidebar from './Sidebar';

export default function Order() {
    
  return (
    <div className='flex w-[full] gap-x-3'>
    <div className='bg-white shadow-lg w-[15%]'>
        <Sidebar/>
      </div>
      <div className='flex justify-center w-[99%] bg-white shadow-lg '>
      <div className="w-[100%]">
        <h1 className='p-2 font-bold'>Order</h1>
          <div className="flex  w-[100%]">
            <div className="w-[10%]  bg-slate-200 p-1 font-medium">Image</div>
            <div className="w-[10%]  bg-slate-200 p-1 font-medium">Name</div>
            <div className="w-[15%]   bg-slate-200 p-1 font-medium">Product Id</div>
            <div className="w-[10%]  bg-slate-200 p-1 font-medium">Total cost</div>
            <div className="w-[10%] bg-slate-200 p-1 font-medium">Customer Name</div>
            <div className="w-[15%]  bg-slate-200 p-1 font-medium">Mobile</div>
            <div className="w-[10%]  bg-slate-200 p-1 font-medium">Status</div>
            <div className="w-[full] bg-slate-200 p-1 font-medium">Payment method</div>
          </div>
          {order.map(it=>(
            <div key={it.id} className="flex  w-[100%] border-b-2 border-gray-200">
             <div className="w-[10%] mb-auto mt-auto  p-1 font-medium">{<img className='max-w-[100%] h-[40px]' src={require(`../image/${it.photo}`)}/>}</div>
            <div className="w-[10%] mb-auto mt-auto p-1 font-medium">{it.Category}</div>
            <div className="w-[15%] mb-auto mt-auto truncate  p-1 font-medium">{it.productId}</div>
            <div className="w-[10%] mb-auto mt-auto p-1 font-medium">{it.totalCost}</div>
            <div className="w-[10%] mb-auto mt-auto font-medium">{it.name}</div>
            <div className="w-[15%] mb-auto mt-auto p-1 font-medium">{it.phone}</div>
            <div className="w-[10%] mb-auto mt-auto p-1 font-medium">{it.status}</div>
            <div className="w-[10%] mb-auto mt-auto p-1 font-medium">{it.payment}</div>
          </div>
          ))}
      </div>
     </div>
    </div>
  )
}