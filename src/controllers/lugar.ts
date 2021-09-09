import { Request, Response } from "express";
import LugarModel from "../Model/Lugar";

class LugarController {
  static async getAll(req: Request, res: Response) {
    try {
      const response = await LugarModel.get();
      return res.json(response);
    } catch (ex) {
      return res.status(500).json({ error: ex.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const response = await LugarModel.getById(Number(req.params.id));
      return res.json(response);
    } catch (ex) {
      return res.status(500).json({ error: ex.message });
    }
  }
  static async getByIdPaquete(req: Request, res: Response) {
    try {
      const response: any = await LugarModel.getByIdPaquete(
        Number(req.params.id)
      );
      return res.json({
        counts: response.length,
        results: response,
      });
    } catch (ex) {
      return res.status(500).json({ error: ex.message });
    }
  }
}

export = LugarController;
