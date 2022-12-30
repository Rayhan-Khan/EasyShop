import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, default: "user", enum: ["user", "admin"] },
   
  },
  { timestamps: true }
);
UserSchema.pre('save',async function(next) {
   this.password = await bcrypt.hash(this.password, 12);   
  next();
});

UserSchema.methods.ConfirmLogin=async function(reqPass,pass){
  return await bcrypt.compare(reqPass,pass);
}
export default mongoose.model("User", UserSchema);