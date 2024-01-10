import express from 'express'
import { authRouter, loginRouter, registerRouter, userRouter} from '../controllers/auth.controller.js'
import {verifyToken} from '../utils/verifyToken.js'

const router = express.Router()

router.get('/', authRouter)
router.post('/register', registerRouter)
router.post('/login', loginRouter)
router.get('/user', verifyToken , userRouter)

export default router