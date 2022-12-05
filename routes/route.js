import express from 'express';
import medicalApi from '../controllers/controller.js';

const router = express.Router();

router.get('/', medicalApi.fetchData);


export default router;