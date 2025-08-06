import express from 'express';
import learnerRoutes from './learner';

const router = express.Router();
router.use('/learner',learnerRoutes);

export default router;