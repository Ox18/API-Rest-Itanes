import { Request, Response } from 'express';
import express from 'express';
const router = express.Router();

router.get('/', (req:Request, res: Response) => {
    res.send('Hello World! Welcome to API.');
});
router.use('/lugar', require('./lugar'));
router.use('/paquete', require('./paquete'));

export = router;