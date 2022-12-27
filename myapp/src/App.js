import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DetailsProduct,
  Header,
  Home,
  Login,
  Product,
  Siginup,
} from "./Components";
import { baseUrl } from "./utils/baseurl";
import NotLoggedin from "./utils/Notloggedin";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
              <Route path="/products" element={<Product />} />
              <Route path="/products/:categories" element={<Product />} />
              <Route path="/products/:id" element={<DetailsProduct />} />
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
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
