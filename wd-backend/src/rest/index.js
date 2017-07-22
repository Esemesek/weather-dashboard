import express from 'express';

import cityRouter from './city';
import weatherRouter from './weather';

const router = express.Router();

router.use('/city', cityRouter);
router.use('/weather', weatherRouter);

export default router;
