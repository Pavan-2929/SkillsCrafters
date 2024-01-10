import mongoose from "mongoose";

const connectToDB = async () => {
  try {
   await mongoose.connect(process.env.MONGO_URL)
      console.log("MongoDB Connected Successfuly");
    
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB
