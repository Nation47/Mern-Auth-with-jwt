import express from 'express';
import { userAuth, logoutUser, updateUserProfile, registerUser, getUserProfile } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', userAuth);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);



export default router;