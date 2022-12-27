import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsProduct, Header, Home, Login, Product, Siginup } from "./Components";
import { baseUrl } from "./utils/baseurl";
import NotLoggedin from "./utils/Notloggedin";

function App() {
  const [data,setData]=useState([]);
  const [phone,setPhone]=useState(Cookies.get('phone'));
  useEffect(()=>{
    (async function(){
     const res= await axios.get(`${baseUrl}/getallproduct`);
        setData(res.data.data)
    }())
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header phone={phone} setPhone={setPhone}/>}>
             <Route index element={<Home data={data}/>} />
             <Route path="/products" element={< Product/>} />
             <Route path="/products/:categories" element={< Product/>} />
             <Route path="/products/:id" element={< DetailsProduct/>} />
             <Route path="/admin"></Route>
             <Route path="/" element ={<NotLoggedin/>}>
             <Route path="/login" element={<Login phone={phone} setPhone={setPhone}/>}/>
            <Route path="/signup" element={<Siginup setPhone={setPhone}/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
