import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryContainer from "./Components/categoryContainer";
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
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";

function App() {
  const [data, setData] = useState([]);
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
              <Route path="/product" element={<Product data={data}/>} />
              <Route
                path="/categories/:name"
                element={<CategoryContainer data={data} />}
              />
              <Route
                path="/search/"
                element={<Product data={data}/>}
              />
              <Route
                path="/search/:pattern"
                element={<Search data={data} />}
              />
              <Route path="/product/:id" element={<DetailsProduct data={data}/>} />
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
