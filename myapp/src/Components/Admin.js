import React from 'react'
import Sidebar from './Sidebar.js'

export default function Admin() {
  return (
    <div className='flex w-[full] gap-x-3'>
    <div className='bg-white shadow-lg w-[15%]'>
        <Sidebar/>
      </div>
      <div className='w-[99%] bg-white shadow-lg '>
        <div>
         
        </div>
      </div>
    </div>

  )
}
