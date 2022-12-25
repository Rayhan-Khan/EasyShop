import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsProduct, Header, Home, Login, Product, Siginup } from "./Components";
import NotLoggedin from "./utils/Notloggedin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
             <Route index element={<Home />} />
             <Route path="/products" element={< Product/>} />
             <Route path="/products/:categories" element={< Product/>} />
             <Route path="/products/:id" element={< DetailsProduct/>} />
             <Route path="/" element ={<NotLoggedin/>}>
             <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Siginup/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
