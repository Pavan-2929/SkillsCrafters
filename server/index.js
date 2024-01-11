import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.router.js'
import contactRouter from './routes/contact.route.js'
import connectToDB from './utils/dataBase.js'
import serviceRouter  from "./routes/service.route.js";
import adminRouter from './routes/admin.route.js'

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
const PORT = process.env.PORT

connectToDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});


app.use('/api', serviceRouter)
app.use('/api/auth', authRouter)
app.use('/api', contactRouter)
app.use('/api/admin', adminRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})
