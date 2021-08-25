import express from 'express';
import LugarController from '../controllers/lugar';
const router = express.Router();

router.get('/', LugarController.getAll)
router.get('/only/:id', LugarController.getById);

export = router;