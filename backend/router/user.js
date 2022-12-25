import { Router } from "express";
import {Login,Signup} from "../controller/user.js"



const router = Router();
router
  .post("/login", Login)
  .post("/signup", Signup)
  

export default router;