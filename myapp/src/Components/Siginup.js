import axios from "axios";
import React, { useState } from "react";
import Cookies from 'js-cookie';
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { baseUrl } from "../utils/baseurl";

export default function Siginup() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [duplicateError,setDuplicateError]=useState(false);
  const [state, setState] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [phoneErr, setPhoneErr] = useState(false);
  const [confirmPassWordErr, setConfirmPassErr] = useState(false);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

 async function handleSubmit(e) {
    e.preventDefault();
    setPhoneErr(false);
    setConfirmPassErr(false)
    setDuplicateError(false);
    const valid = /^(?:\+88|88)?(01[3-9]\d{8})$/.test(state.phone);
    if (!valid || state.password !== state.confirmPassword) {
      if (!valid) setPhoneErr(true);
      if (state.password !== state.confirmPassword) setConfirmPassErr(true);
      return;
    }
        try{
          const res= await axios.post(`${baseUrl}/signup`,state);
          if(res.status===201){
               Cookies.set('name',res.data.data.name,{expires:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000)});
               Cookies.set('_id',res.data.data._id,{expires:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000)});
               Cookies.set('role',res.data.data.role,{expires:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000)});
               Cookies.set('phone',res.data.data.phone,{expires:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 5000)});
          }
        }catch(error){
          if(error.response.status===409)
               setDuplicateError(true);
        }
       
  }

  return (
    <div className="flex w-full h-[calc(100vh-5vh)] justify-center items-center">
      <div className="w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] rounded-lg shadow-xl bg-white ">
        <header className="text-center  text-gray-900 text-xl mt-5 font-bold mb-2">
          Signup
        </header>

        <form className="flex-col w-[80%] mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            name="name"
            placeholder="Name"
            className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={"text"}
            value={state.name}
            id="name"
            onChange={handleInputChange}
            required
          />

          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            name="phone"
            placeholder="Valid BD Number"
            className={`w-[90%] mb-2 shadow appearance-none border-b-2 ${
              phoneErr ? "border-red-500" : "border-indigo-500"
            } rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type={"text"}
            id="phone"
            required
            value={state.phone}
            onChange={handleInputChange}
          />
          {phoneErr && (
            <p className="text-red-500 -mt-3 mb-1">
              Please Enter Valid Bangladeshi Number
            </p>
          )}
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <span
              onClick={() => setToggle1((toggle1) => !toggle1)}
              className="absolute right-2 top-3"
            >
              {toggle1 ? <MdVisibility /> : <MdVisibilityOff />}
            </span>
            <input
              placeholder="password"
              className={`w-[90%] mb-2 shadow appearance-none border-b-2 ${
                confirmPassWordErr
                  ? "border-red-500 rounded"
                  : "border-indigo-500 rounded"
              } py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              name="password"
              id="password"
              onChange={handleInputChange}
              type={toggle1 ? "text" : "password"}
              value={state.password}
              required
            />
          </div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <span
              onClick={() => setToggle2((toggle2) => !toggle2)}
              className="absolute right-2 top-3"
            >
              {toggle2 ? <MdVisibility /> : <MdVisibilityOff />}
            </span>
            <input
              placeholder="confirm password"
              className={`w-[90%] mb-2 shadow appearance-none border-b-2 ${
                confirmPassWordErr
                  ? "border-red-500 rounded"
                  : "border-indigo-500 rounded"
              } py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleInputChange}
              value={state.confirmPassword}
              type={toggle2 ? "text" : "password"}
              required
            />
            {confirmPassWordErr && (
            <p className="text-red-500 -mt-3 mb-2">
              Password Not Match
            </p>
          )}
          {duplicateError && ( <p className="text-red-500 -mt-3 mb-2">
              Phone Number Already Used
            </p>)}
          </div>
          <div className="grid grid-cols-1 divide-y">
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto mb-2 w-[90%]"
                type="submit"
              >
                signup
              </button>
            </div>
            <div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-8  w-[70%] mt-2 mb-6">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
