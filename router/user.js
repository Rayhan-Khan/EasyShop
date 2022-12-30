import { Router } from "express";
import {Login,Logout,Signup} from "../controller/user.js"



const router = Router();
router
  .post("/login", Login)
  .post("/signup", Signup)
  .post("/logout",Logout)
  

export default router;