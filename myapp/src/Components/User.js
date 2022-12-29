import React from 'react'
import user from '../Data/User';
import Sidebar from './Sidebar';

export default function User() {
    
  return (
    <div className='flex w-[full] gap-x-3'>
    <div className='bg-white shadow-lg w-[15%]'>
        <Sidebar/>
      </div>
      <div className='flex justify-center w-[99%] bg-white shadow-lg '>
      <div className="w-[90%]">
          <div className="flex  w-[95%]">
            <div className="w-[10%]  bg-slate-200 p-1 font-medium">Photos</div>
            <div className="w-[15%] bg-slate-200 p-1 font-medium">Name</div>
            <div className="w-[10%]  bg-slate-200 p-1 font-medium">Age</div>
            <div className="w-[15%] bg-slate-200 p-1 font-medium">Address</div>
            <div className="w-[15%] bg-slate-200 p-1 font-medium">Mobile</div>
            <div className="w-[23%] bg-slate-200 p-1 font-medium">Action</div>
          </div>
          {user.map(it=>(
            <div key={it.id} className="flex  w-[95%] border-b-2 border-gray-200">
            <div className="w-[10%] h-[40px] mt-auto mb-auto  p-1 font-medium"><img className='w-[100%] h-[40px]' src={require(`../image/${it.photos}`)}/></div>
            <div className="w-[15%] mt-auto mb-auto p-1 font-medium">{it.Name}</div>
            <div className="w-[10%] mt-auto mb-auto p-1 font-medium">{it.age}</div>
            <div className="w-[15%] mt-auto mb-auto p-1 font-medium">{it.address}</div>
            <div className="w-[15%] mt-auto mb-auto  p-1 font-medium">{it.mobile}</div>
            <button className='bg-green-700 mb-auto mr-1 mt-auto p-2 text-white'>Add User</button>
            <button className='bg-green-700 mb-auto mr-1 mt-auto p-2 text-white'>Edit</button>
            <button className='bg-red-700 mb-auto mr-1 mt-auto p-2 p-2 text-white'>Delete</button>
          </div>
          ))}
      </div>
     </div>
    </div>
  )
}
