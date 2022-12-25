import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";



const NotLoggedin=function(){
    
   return Cookies.get('name')?<Navigate to='/'/>:<Outlet/>;
}
export default NotLoggedin;