import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout({ setCart }) {
  const navigate = useNavigate();
  const str = localStorage.getItem("cart");
  const cart = JSON.parse(str);
  const name = Cookies.get("name");
  const phone = Cookies.get("phone");
  console.log(cart.length)
  const [state, setState] = useState({
    Email: "",
    Phone: phone,
    Name: name,
    Country: "",
    Street: "",
    PostCode: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name === undefined) navigate("/login");
    localStorage.clear();
    setCart(localStorage.setItem("cart", JSON.stringify([])));
    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap sm:flex-nowrap m-2 pb-2 bg-white shadow-md">
        {/* billing details */}
        <div className="w-[100%] sm:w-[60%]">
          <h1 className="font-bold">Billing Deatils</h1>
          <div className="flex-col w-[80%] mx-auto">
            <label
              htmlFor="Email"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Email
            </label>
            <input
              name="Email"
              placeholder="Email"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"email"}
              value={state.Email}
              id="Email"
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="Phone"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Phone
            </label>
            <input
              name="Phone"
              placeholder="Phone"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={state.Phone}
              id="Phone"
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="Name"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Name
            </label>
            <input
              name="Name"
              placeholder="Name"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={state.Name}
              id="Name"
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="Country"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Country
            </label>
            <input
              name="Country"
              placeholder="Country"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={state.Country}
              id="Country"
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="Street"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Street Address
            </label>
            <input
              name="Street"
              placeholder="Street Address"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={state.Street}
              id="Street"
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="PostCode"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Postcode
            </label>
            <input
              name="PostCode"
              placeholder="Postcode"
              className="w-[90%] mb-2 shadow appearance-none border-b-2 border-indigo-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type={"text"}
              value={state.PostCode}
              id="PostCode"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* order */}
        <div className="w-[100%] sm:w-[40%] ">
          <h1 className="font-bold">Your order</h1>
          <div className="flex gap-2 w-[95%]">
            <div className="w-[60%]  bg-slate-200 p-1 font-medium">Product</div>
            <div className="w-[35%] bg-slate-200 p-1 font-medium">Subtotal</div>
          </div>

          {cart.map((it) => (
            <div
              key={it.id}
              className="flex w-[95%] gap-2 bg-white mb-1 border-b-2 border-indigo-600"
            >
              <div className="w-[60%]  p-1 font-medium">
                {it.name} * {it.items}
              </div>
              <div className="w-[30%] p-1 font-medium">{`${
                it.items * it.Price
              }TK`}</div>
            </div>
          ))}
          <div className="flex gap-2 w-[95%] mb-10">
            <div className="w-[60%]  bg-slate-200 p-1 font-medium">Total</div>
            <div className="w-[35%] bg-slate-200 p-1 font-medium">
              {Math.round(
                cart.reduce((prev, current) => {
                  return prev + current.items * current.Price;
                }, 0)
              )}{" "}
              TK
            </div>
          </div>
          <div className="mb-3">
            <Link
              to={"/product"}
              className="bg-green-700 mr-1 w-[100px] p-2 rounded-md text-white hover:opacity-90"
            >
              {" "}
              Add More Items
            </Link>
           { <button
              type="submit"
              disabled={cart.length<1}
              className={cart.length>0 ? `bg-green-700  w-[100px] p-2 rounded-md
               text-white hover:opacity-90`:'bg-slate-100 w-[100px] p-2 rounded-md'}
            >
              {" "}
              Checkout
            </button>}
          </div>
        </div>
      </div>
    </form>
  );
}
