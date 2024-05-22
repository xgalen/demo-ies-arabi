import express from 'express';
import { GetController1 } from '../controllers/getController1';

const router = express.Router();
const controller = new GetController1();

router.get('/:tariff_id/:sku', controller.handle);

export { router as getRoute1 };