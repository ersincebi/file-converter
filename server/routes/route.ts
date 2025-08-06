import { Router } from 'express';
import { handleConvert } from '../controllers/controller';
const router = Router();
router.post('/', handleConvert);
export default router;
