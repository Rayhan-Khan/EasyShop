import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../utils/baseurl";
export default function Catgegories({ data }) {
  const [categories, setCategoris] = useState({});
  const obj = {};
  for (const category of data) {
    if (!(category.Categories in obj)) {
      obj[category.Categories] = category.productPhotos[0];
    }
  }
  useEffect(() => {
    setCategoris(obj);
  }, []);

  return (
    <div className="flex justify-center">
    <div className="flex w-[90%] md:w-[80%] gap-3 flex-wrap">
      <h1 className="w-full mt-2 font-bold text-2xl">Categories</h1>
      {Object.entries(categories).map((it) => (
       
        <div className="relative h-[200px] w-[100%] sm:w-[30%]  color-white" key={it[0]}>
            <Link >
            {<img className="w-full h-full object-object-cover opacity-50 hover:opacity-60" src={generatePublicUrl(it[1])} alt='category'/>}
            <div className="-translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%] bg-white p-2">{it[0]}</div>
            </Link>
          </div>
          
      ))}
      </div>
    </div>
  );
}
