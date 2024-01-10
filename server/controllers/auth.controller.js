import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const authRouter = (req, res) => {
  res.status(200).json("This message is from the authRouter");
};

export const registerRouter = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    const userExist = await User.findOne({ email });

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return next(errorHandler(400, "Enter all details"));
    }

    if (password !== confirmPassword) {
      return next(errorHandler(400, "Please enter same password"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    if (userExist) {
      return next(errorHandler(400, "User already exist"));
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    console.log(newUser);

    res.status(201).json({
      message: "Registration successfull",
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
      newUser,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

export const loginRouter = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validEmail = await User.findOne({ email });

    if (!validEmail) {
      return next(errorHandler(404, "User Not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validEmail.password);

    if (!validPassword) {
      return next(errorHandler(400, "Wrong Password"));
    }

    res.status(200).json({
      message: "Login Successfully",
      token: await validEmail.generateToken(),
      userId: validEmail._id,
    });
  } catch (error) {
    next(error);
  }
};

export const userRouter = async (req, res, next) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json(userData);
  } catch (error) {
    next(errorHandler(400, "Internal error"));
  }
};
