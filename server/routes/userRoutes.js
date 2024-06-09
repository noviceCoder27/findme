import express from 'express';
import { checkAdmin, requireAuth } from '../middleware/requireAuth.js';
import { createUser, deleteUser, getProfilePic, getUserDetails, listAllUsers, login, updateUser } from '../controllers/userControllers.js';
import tryCatch from './../utils/globalTryCatch.js';
import multer from 'multer';


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();


router.get('/:userName',tryCatch(getUserDetails));
router.get('/profilePic/:userName', tryCatch(getProfilePic));
router.get('/',requireAuth,checkAdmin,tryCatch(listAllUsers));
router.post('/create', upload.single('profilePic'),tryCatch(createUser));
router.post('/login', tryCatch(login));
router.put('/:id',requireAuth,tryCatch(updateUser));
router.delete('/:id',requireAuth,tryCatch(deleteUser))


export default router;