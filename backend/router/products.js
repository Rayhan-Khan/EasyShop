import { Router } from "express";
import { createProduct, getallproduct } from "../controller/products.js";

const router =Router();

router
    .post('/createproduct',createProduct)
     .get('/getallproduct',getallproduct)


export default router;