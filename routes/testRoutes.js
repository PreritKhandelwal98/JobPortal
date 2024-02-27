import express from 'express';
import { testPostController } from '../controllers/testController.js';

//router object
const router=express.Router();

//routes
router.post('/test-post',testPostController);
// router.get('/test-get',testGetController);

//export
export default router