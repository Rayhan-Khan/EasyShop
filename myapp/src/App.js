import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryContainer from "./Components/categoryContainer";
import {
  Cart,
  DetailsProduct,
  Header,
  Home,
  Login,
  Product,
  Siginup,
} from "./Components";
import { baseUrl } from "./utils/baseurl";
import NotLoggedin from "./utils/Notloggedin";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";
import Checkout from "./Components/Checkout";

function App() {
  const str = localStorage.getItem('cart');
  if(!str){
    localStorage.setItem('cart', JSON.stringify([]));
  }
       
  const [data, setData] = useState([]);
  const [cart,setCart]=useState(JSON.parse(str));
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(Cookies.get("phone"));

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/getallproduct`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-[100vh]">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      )}
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Header phone={phone} setPhone={setPhone} />}
            >
              <Route index element={<Home data={data} />} />
              <Route path="/product" element={<Product setCart={setCart} data={data}/>} />
              <Route
                path="/categories/:name"
                element={<CategoryContainer setCart={setCart} data={data} />}
              />
              <Route
                path="/search/"
                element={<Product setCart={setCart} data={data}/>}
              />
              <Route
                path="/search/:pattern"
                element={<Search setCart={setCart} data={data} />}
              />
              <Route path="/product/:id" element={<DetailsProduct setCart={setCart} data={data}/>} />
              <Route path="/cart" element={<Cart setCart={setCart}/>}/>
              <Route path="/checkout" element={<Checkout setCart={setCart}/>}/>
              <Route path="/admin"></Route>
              <Route path="/" element={<NotLoggedin />}>
                <Route
                  path="/login"
                  element={<Login phone={phone} setPhone={setPhone} />}
                />
                <Route
                  path="/signup"
                  element={<Siginup setPhone={setPhone} />}
                />
              </Route>
              <Route path="/*" element={<NotFound/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
