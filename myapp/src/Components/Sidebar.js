import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className=''>
        <div className='mb-1 p-2 text-center hover:bg-gray-200'>
        <Link to={'/admin'}>Dashboard</Link>
        </div>
        <div className='mb-1 p-2 text-center  hover:bg-gray-200'>
        <Link to={'/admin/user'}>Users</Link>
        </div>
        <div className='mb-1 p-2 text-center  hover:bg-gray-200'>
        <Link to={'/product'}>Products</Link>
        </div>
        <div className='mb-1 p-2 text-center  hover:bg-gray-200'>
        <Link to={''}>Order</Link>
        </div>
    </div>
   
  )
}
