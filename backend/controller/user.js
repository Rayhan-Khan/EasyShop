import User from "../model/User.js";
import jwt from "jsonwebtoken";

function GenerateTokenAndCookie(data, status, message, res) {
  const token = jwt.sign({ data }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 - 2000),
    })
    .status(status)
    .json({ message: message,data:data });
}

export const Signup = async (req, res) => {
    const {
      name,
      phone,
      password,
    } = req.body;
   
    const user = new User({
      name,
      phone,
      password,
    });
    await user.save((err, data) => {
      if (data) {
        data.password = undefined;
        return GenerateTokenAndCookie(data, 201, "successfully created", res);
      }
        if (err.code === 11000) {
          return res
            .status(409)
            .json({ message: "phone alrady used,try new one" });
        }
        return res.status(500).json({ message: "something wrong" });
      }
    )
};

export const Login = async (req, res) => {
  const { phone, password } = req.body;
  if (!phone || !password)
    return res.status(401).send("please provide phone or password");
  const user = await User.findOne({ phone }).select("+password");

  if (!user || !(await user.ConfirmLogin(password, user.password)))
    return res.status(401).json("Email or password are wrong");
  user.password = undefined;
  const status = 200;
  const message = "successfully login";
  return GenerateTokenAndCookie(user, status, message, res);
};

export const Logout = async (req, res) => {
  await res.clearCookie("token");
  res.status(200).json({ message: "successfully logout" });
};


