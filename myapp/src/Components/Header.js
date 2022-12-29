import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdShoppingCart,
  MdSearch,
  MdViewHeadline,
  MdClear,
} from "react-icons/md";
import Cookies from "js-cookie";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
import Sidebar from "./Sidebar";

export default function Header({ phone, setPhone }) {
  const str = localStorage.getItem('cart');
    const cart=JSON.parse(str);
    const role= Cookies.get('role')
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  async function logout() {
    await axios.post(`${baseUrl}/logout`);
    Cookies.remove("name");
    Cookies.remove("_id");
    Cookies.remove("role");
    Cookies.remove("phone");
    setPhone(Cookies.get("phone"));
    setToggle(false);
  }

  return (
    <>
      <div className="hidden sm:flex items-center justify-between bg-blue-500 text-white p-2 px-20">
        <div className="flex">
          <Link className="mr-3 hover:color-red-600" to={"/"}>
            EasyShop
          </Link>
          <Link to={"/product"}>AllCategories</Link>
        </div>
        <div className="w-[30%] max-w-xl relative flex">
          <span className="absolute left-2 top-1 text-gray-400">
            <MdSearch />
          </span>
          <input
            className="w-full pl-6 focus:outline-none text-black border-r-0 rounded-l-full"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to={`/search/${search}`} className="bg-green-700 px-2">
            Search
          </Link>
        </div>

       <div className="flex">
          {role!=='admin' && <Link to={'/cart'} className="flex mr-7 relative">
            <MdShoppingCart size={22} className="mt-1" />
            {cart.length>0 && <span className="absolute w-full font-light aspect-square text-center -top-2 left-3.5 rounded-full bg-[#FF6347] text-[FFFAF0]">
              {cart.length}
            </span>}
          </Link>}
          {role==='admin' && <Link to={'/admin'} className="flex mr-7">
         Dashboard
        </Link>}
          {phone ? (
            <div className="flex">
              <div>
                <h3 className="mr-3">{Cookies.get("name")}</h3>
              </div>
              <div>
                <button onClick={logout} className="">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div>
                <Link to="/login" className="mr-3">
                  Login
                </Link>
              </div>
              <div>
                <Link to={"/signup"}>Signup</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex sm:hidden bg-blue-500 text-white p-2">
        <Link to={"/"}>EasyShop</Link>
        <Link to={"/product"} className="mr-auto ml-3">
          AllCategories
        </Link>
        {role!=='admin' && <Link to={'/cart'} className="flex mr-7 relative">
          <MdShoppingCart size={22} className="mt-1" />
          {cart.length>0 && <span className="absolute w-full font-light aspect-square text-center -top-2 left-3.5 rounded-full bg-[#FF6347] text-[FFFAF0]">
              {cart.length}
            </span>}
        </Link>}
        {role==='admin' && <Link to={'/admin'} className="flex mr-7">
         Dashboard
        </Link>}
        <div className="transition" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <MdClear size={20} className="mt-1" />
          ) : (
            <MdViewHeadline size={20} className="mt-1" />
          )}
        </div>
      </div>
      <div
        className={`sm:hidden fixed flex-col w-[70%] shadow-lg bg-slate-300 ${
          toggle ? "left-0" : "left-[-71%]"
        } ease-in duration-300`}
      >
        <div className="w-[90%] h-8 relative flex p-2">
          <span className="absolute left-3 top-4 text-gray-400">
            <MdSearch />
          </span>
          <input
            className="w-full pl-6 focus:outline-none text-black border-r-0 rounded-l-full"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link
            onClick={() => setToggle(false)}
            to={`/search/${search}`}
            className="bg-green-500 pt-1  px-2"
          >
            Search
          </Link>
        </div>
        <p className="border-b-2 border-white"></p>
        {phone ? (
          <div className="sm:hidden">
            <div>
              <h2 className="border-b-2 border-white p-2">
                {Cookies.get("name")}
              </h2>
            </div>
            <div>
              <button onClick={logout} className="w-[93%] text-start p-2">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="sm:hidden">
            <Link
              to="/login"
              className="block p-2 border-b-2 border-white"
              onClick={() => setToggle(false)}
            >
              Login
            </Link>
            <Link
              className="block p-2"
              to={"/signup"}
              onClick={() => setToggle(false)}
            >
              Signup
            </Link>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}
