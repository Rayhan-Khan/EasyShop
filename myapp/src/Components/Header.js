import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdShoppingCart, MdSearch,MdViewHeadline, MdClear } from "react-icons/md";
import Cookies from 'js-cookie'

export default function Header() {
       const [toggle,setToggle]=useState(false);
  return (
    <>
      <div className="hidden  sm:flex items-center justify-between bg-blue-500 text-white p-2 px-20">
        <div className="flex">
        <Link className="mr-3 hover:color-red-600" to={'/'}>EasyShop</Link>
        <Link to={'/product'}>AllCategories</Link>
        </div>
        <div className="w-[30%] max-w-xl relative flex">
          <span className="absolute left-2 top-1 text-gray-400">
            <MdSearch />
          </span>
          <input
            className="w-full pl-6 focus:outline-none text-black border-r-0 rounded-l-full"
            placeholder="Search"
          />
          <Link to={'/search'} className="bg-green-700 px-2">Search</Link>
        </div>

        <div className="flex">
          <button className="flex mr-5">
            <MdShoppingCart size={18} className="mt-1" />
            <span>Cart</span>
          </button>
          {
            Cookies.get('name')?
            <div className="flex">
               <div>
               <p className="mr-3">{Cookies.get('name')}</p>
             </div>
             <div>
               <Link to={'/logout'}>Logout</Link>
             </div>
             </div>:
               <div className="flex">
               <div>
               <Link to={'/login'} className="mr-3">Login</Link>
             </div>
             <div>
               <Link to={'/signup'}>Signup</Link>
             </div>
             </div>
          }
       
        </div>
      </div>
      <div className="flex sm:hidden justify-between bg-blue-500 text-white p-2">
      <Link to={'/'}>EasyShop</Link>
      <Link to={'/product'} className='mr-auto ml-3'>AllCategories</Link>
      <button className="flex mr-5">
            <MdShoppingCart size={18} className="mt-1" />
            <span>Cart</span>
          </button>
        <div className="transition" onClick={()=>setToggle(!toggle)}>{toggle?<MdClear size={20} className='mt-1'/>
        :<MdViewHeadline size={20} className='mt-1'/>}</div>
      </div>
    <div className={`fixed flex-col w-[70%] shadow-lg bg-slate-300 ${toggle?'left-0':'left-[-71%]'} ease-in duration-300`}>
    <div className="w-[90%] max-w-xl relative flex p-2">
          <span className="absolute left-2 top-3 text-gray-400">
            <MdSearch />
          </span>
          <input
            className="w-full pl-6 focus:outline-none text-black border-r-0 rounded-l-full"
            placeholder="Search"
          />
          <Link to={'/search'} className="bg-green-700 px-2">Search</Link>
        </div>
        <p className= 'border-b-2 border-white-1000'></p>
          {
            Cookies.get('name')?
            <div>
               <p className="block p-2 border-b-2 border-white-1000">{Cookies.get('name')}</p>
               <Link className="block p-2" to={'/logout'}>Logout</Link>
             </div>:
               <div>
               <Link className="block p-2 border-b-2 border-white-1000" to={'/login'}>Login</Link>
               <Link className="block p-2" to={'/signup'}>Signup</Link>
             </div>
          }
    </div>
       
      <Outlet />
    </>
  );
}
