import mongoose from "mongoose";

const product = new mongoose.Schema(
  {
    Categories: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  
    Total: {
      type: Number,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Offer: { type: Number, required: true },
    productPhotos: [{ type: String }],
    Details: String,
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);




product.virtual('calculatePrice').get(function(){
    const discount =this.Offer/100;
    const finalPrice=this.Price-(this.Price*discount);
   return finalPrice;
});



const Product = mongoose.model("Product", product);
export default Product;