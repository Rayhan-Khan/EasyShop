import upload from "./fileUpload.js";
const up=upload.array('productPhotos');
import multer from "multer";
import Product from "../model/products.js";
export const createProduct=async function(req,res){
    up(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          return res.status(500).json({ error: "multer error" });
        } else if (err) {
          // An unknown error occurred when uploading.
          return res.status(500).json({ error: "error" });
        }
      
        const {Categories,Name,Total,Price,Offer,Details}=req.body;
        const productPhotos = req.files.map((file) => file.filename); 
         const product=new Product({
            Categories,
            Name,
            Total,
            Price,
            Offer,
            Details,
            productPhotos
        })
        product.save((error,data)=>{
            if (error) {
                if(error.code===1100)
                return res.status(409).json(' Duplicate Error');
          
                return res.status(400).json({ error });
              }
              res.status(201).json({
                data,
              });
        }) 
        // Everything went fine.
      })
}

export const getallproduct=async function(req,res){
    const data=await Product.find({});
    res.status(200).json({data})
}