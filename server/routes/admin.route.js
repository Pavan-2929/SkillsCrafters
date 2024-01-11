import express from 'express'
import  {getContactDataControllers, getUsersController, deleteUser,getUserById, updateUserById, deleteContact, getServiceData, deleteService, createService, getCustomers}  from '../controllers/admin.controller.js';
import { verifyToken } from '../utils/verifyToken.js';
import { adminMiddleware } from '../utils/adminMiddleware.js';

const router = express.Router();

router.get('/users',verifyToken, adminMiddleware, getUsersController)
router.delete('/users/delete/:id', verifyToken,adminMiddleware, deleteUser)
router.get('/users/:id', verifyToken,adminMiddleware, getUserById)
router.patch('/users/update/:id', verifyToken, adminMiddleware, updateUserById)


router.get('/contacts',verifyToken,adminMiddleware, getContactDataControllers)
router.delete('/contacts/delete/:id', verifyToken, adminMiddleware, deleteContact)


router.get('/services', verifyToken, adminMiddleware, getServiceData)
router.delete('/services/delete/:id', verifyToken, adminMiddleware, deleteService)
router.post('/services/create', verifyToken, adminMiddleware, createService)
router.get('/services/customers', verifyToken, adminMiddleware, getCustomers)

export default router

