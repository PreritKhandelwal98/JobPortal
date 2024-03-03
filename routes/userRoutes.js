import express from 'express';
import userAuth from '../middelwares/authMiddleware.js';
import { getUserController, updateUserController } from '../controllers/userController.js';

//router object
const router = new express.Router()

//UPDATE USER || PUT
router.post('/getUser', userAuth, getUserController)

//UPDATE USER || PUT
router.put('/update-user', userAuth, updateUserController)

export default router;