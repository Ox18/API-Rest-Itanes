import express from 'express';
import PaqueteController from '../controllers/paquete';
const router = express.Router();

router.get('/', PaqueteController.getAll);
router.get('/only/:id', PaqueteController.getById);

export = router;