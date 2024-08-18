import { Request, Response } from "express";
import { ProductModel } from "../models/products";

class ProductsController {

    public async getAll(_req: Request, res: Response) {

        const results = await ProductModel.getAll();
        return res.status(200).json({
            results: results,
            test: "ok"
        })
    }

    public async addProduct(req: Request, res: Response) {
        const { name, price } = req.body;
        
        return res.status(200).json({
            name,
            price
        })
    }

}

export const ProductsCtrl = new ProductsController();