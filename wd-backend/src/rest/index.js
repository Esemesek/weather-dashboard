import express from 'express';

import cityRouter from './city';
import weatherRouter from './weather';

const router = express.Router();

router.use('/city', cityRouter.router);
router.use('/weather', weatherRouter.router);

export default router;
