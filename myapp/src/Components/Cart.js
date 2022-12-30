import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../utils/baseurl";

export default function Cart({ setCart }) {
  const str = localStorage.getItem("cart");
  const cart = JSON.parse(str);
  

  function addCart(id,add){
    const str = localStorage.getItem('cart');
    const cart=JSON.parse(str);
    if(id===undefined)
       return;
    for(let i=0;i<cart.length;i++){
      if(cart[i].id===id){
        if(add==='plus')
        cart[i].items+=1;
        else
        cart[i].items-=1;
        const jsonArray = JSON.stringify(cart);
        localStorage.setItem('cart', jsonArray);
        setCart(cart);
        return;
      }
    }
  }
   function Delete(id){
       let arr= cart.filter(it=>it.id!==id);
       const jsonArray = JSON.stringify(arr);
       localStorage.setItem('cart', jsonArray);
       setCart(arr);
   }

  return (
    <div>
      {cart.length === 0 && (
        <h1 className="font-bold text-center p-2 text-white bg-red-500">
          Cart Is Empty
        </h1>
      )}
      {cart.length > 0 && (
        <div>
        <div className="flex justify-center align-middle">
          <div className="w-[100%] p-1 sm:w-[70%]">
            {cart.map((it) => (
              <div
                key={it.id}
                className="flex justify-between gap-x-4 mb-5 bg-white shadow-md"
              >
                <div className=" ">
                  <img
                    className="w-[50px] h-[50px]"
                    src={generatePublicUrl(it.photo)}
                    alt='image'
                  />
                </div>
                <div className="mt-auto mb-auto w-[100px] sm:w-[200px]">
                  {it.name}
                </div>
                <div className="mt-auto mb-auto">Price : {it.Price}</div>
                <div className="mt-auto mb-auto">Total : {it.Price*it.items}</div>
                <div className="mt-auto mb-auto">
                  <button onClick={()=>addCart(it.id,'minus')} disabled={it.items<=1} className={`mr-3 w-5 h-[30px]  font-bold bg-slate-200 `}>
                    {" "}
                    -{" "}
                  </button>
                  {
                    <input
                     type="number"
                     min={1}
                     onChange={()=>''}
                      className="w-[40px] h-[30px] text-center self-center"
                      value={it.items}
                    />
                  }{" "}
                  <button onClick={()=>addCart(it.id,'plus')} className="mr-3 w-5 h-[30px] font-bold bg-slate-200">
                    +
                  </button>
                </div>
               <div className="mb-auto mt-auto mr-1">
                <button onClick={()=>Delete(it.id)} className="bg-red-500 p-1 text-white">Delete</button>
               </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
        <Link to={'/product'} className="bg-green-700 mr-1 w-[100px] p-2 rounded-md text-white hover:opacity-90"> Add More Items</Link>
        <Link to={'/checkout'} className="bg-green-700 w-[100px] rounded-md p-2 text-white hover:opacity-90">Checkout</Link>
        </div>
        </div>
      )}
    </div>
  );
}
