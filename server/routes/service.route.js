import express from 'express'
import {serviceController, customerController}  from '../controllers/service.controller.js';

const router = express.Router();

router.get('/service', serviceController)
router.post('/service/customer', customerController)

export default router
