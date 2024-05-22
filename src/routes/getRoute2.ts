import express from 'express';
import { GetController2 } from '../controllers/getController2';

const router = express.Router();
const controller = new GetController2();

// users --> always returns the same
// try yourself to modify it to return different values
router.get('/', controller.handle);

export { router as getRoute2 };