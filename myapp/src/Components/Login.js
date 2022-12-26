import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

import { MdVisibilityOff, MdVisibility, MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { baseUrl } from "../utils/baseurl";

export default function Login({setPhone}) {
  const navigate =useNavigate();

  const [toggle, setToggle] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [state, setState] = useState({ phone: "", password: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/login`, state);
      if (res.status === 200 ) {
        Cookies.set("name", res.data.data.name, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000),
        });
        Cookies.set("_id", res.data.data._id, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000),
        });
        Cookies.set("role", res.data.data.role, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000),
        });
        Cookies.set("phone", res.data.data.phone, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000),
        });
        setPhone(Cookies.get('phone'))
      }
      if(res.data.data.role==='admin'){
        navigate('/admin')
      }else{
        navigate('/')
      }
    } catch (error) {
      if (error.response.status === 401) setLoginError(true);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="flex w-full h-[calc(100vh-5vh)] justify-center items-center">
      <div className="w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-lg shadow-xl bg-white ">
        <header className="text-center  text-gray-900 text-xl mt-5 font-bold mb-2">
          Login
        </header>
        <div className="flex justify-center text-indigo-600">
          <MdPerson size="10rem" />
        </div>

        <form className="flex-col w-[80%] mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            name="phone"
            placeholder="Number"
            className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={"text"}
            value={state.phone}
            id="phone"
            required
            onChange={handleInputChange}
          />
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <span
              onClick={() => setToggle((toggle) => !toggle)}
              className="absolute right-2 top-3"
            >
              {toggle ? <MdVisibility /> : <MdVisibilityOff />}
            </span>
            <input
              placeholder="password"
              className="w-[90%] mb-4 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              value={state.password}
              type={toggle ? "text" : "password"}
              required
              onChange={handleInputChange}
            />
          </div>
          {loginError && (
            <p className="text-red-500 -mt-4 mb-2">phone or password wrong</p>
          )}
          <div className="grid grid-cols-1 divide-y">
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto mb-2 w-[90%]"
                type="submit"
              >
                Login
              </button>
            </div>
            <div>
              <Link to={'/signup'} className="bg-green-500 block hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded m-auto  w-[70%] mt-2 mb-6">
                Create New Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
