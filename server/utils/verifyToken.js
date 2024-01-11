import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({password:0});

    if(userData){
          req.user = userData;
          req.token = token;
          req.userIdD = userData._id;
    }


    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token not provided" });
  }
};
