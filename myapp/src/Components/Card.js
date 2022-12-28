import React from "react";
import { generatePublicUrl } from "../utils/baseurl";
import Cookies from 'js-cookie'

/* transform transition duration-300 hover:scale-110 */

export default function ({data}) {
  return (
    <div className="w-full overflow-hidden sm:min-w-[20%] sm:max-w-[24%] rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <img
        className="opacity-90 w-full h-[200px] sm:h-[150px]"
        src={generatePublicUrl(data.productPhotos[0])}
      />
      <div className="m-3">
        <h1 className="mb-3 line-clamp-2 break-normal">
         {data.Name}
        </h1>
        <span className="block">
          Price : {data.calculatePrice}Tk <span className="line-through mr-3">{data.Price} </span>
        </span>
        <span> Offer : {data.Offer}%</span>
        <div>
        </div>
       
      </div>
      {Cookies.get('role')==='admin'?<div className="flex p-2 justify-between">
        <button className="w-[50%] bg-[#22c55e] hover:opacity-90 p-2">Edit</button>
        <button className="w-[50%] bg-red-500 rounded-sm p-2 hover:opacity-90">Delete</button>
      </div>:<button className="block w-full text-white bg-[#22c55e] hover:opacity-90 p-2">Add To Cart</button>}
    </div>
  );
}
