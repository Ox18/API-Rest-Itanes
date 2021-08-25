import { Request, Response } from 'express';
import PaqueteModel from '../Model/Paquete';

class PaqueteController {
    static async getAll(req: Request, res: Response) {
        try {
            const response = await PaqueteModel.get();
            res.json({
                results: response
            });
        } catch (ex) {
            res.status(500).json({ error: ex.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const response = await PaqueteModel.getById(Number(req.params.id));
            res.json(response);
        } catch (ex) {
            res.status(500).json({ error: ex.message });
        }
    }
};

export = PaqueteController;