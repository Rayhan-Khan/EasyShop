import React from "react";
import Sidebar from "./Sidebar.js";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import data from "../Data/ChartData";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Label

} from "recharts";
export default function Admin() {
  return (
    <div className="flex w-[full] gap-x-3">
      <div className="bg-white shadow-lg w-[15%]">
        <Sidebar />
      </div>
      <div>
        <div className="flex justify-center w-[99%] bg-white shadow-lg ">
          <div className="flex gap-2 mt-2">
            <div className="w-[200px] h-[100px] bg-white shadow-lg rounded-md">
              <div className="flex justify-between p-2">
                <div className="flex flex-col justify-between h-[80px]">
                  <div className="">Users</div>
                  <div>720</div>
                </div>
                <div>
                  <FaUsers className="text-blue-700 mt-2" />
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[100px] bg-white shadow-lg rounded-md">
              <div className="flex justify-between p-2">
                <div className="flex flex-col justify-between h-[80px]">
                  <div className="">Orders</div>
                  <div>1.3k</div>
                </div>

                <div>
                  <FaShoppingCart className="text-blue-700 mt-2" />
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[100px] bg-white shadow-lg rounded-md">
              <div className="flex justify-between p-2">
                <div className="flex flex-col justify-between h-[80px]">
                  <div className="">Earnings</div>
                  <div>1.2M</div>
                </div>

                <div>
                  <TbCurrencyTaka className="text-blue-700 mt-2" />
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[100px] bg-white shadow-lg rounded-md">
              <div className="flex justify-between p-2">
                <div className="flex flex-col justify-between h-[80px]">
                  <div className="">My Balance</div>
                  <div>1.5M</div>
                </div>
                <div>
                  <TbCurrencyTaka className="text-blue-700 mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white shadow-lg rounded-md">
          {" "}
          {/* barchart start */}
          <h1 className="text-center font-bold"> 2022 Sell and Target Sell summery</h1>
          <LineChart
            width={1000}
            height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={'preserveStartEnd'} >
              </XAxis>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="target" stroke="#FF5733" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
