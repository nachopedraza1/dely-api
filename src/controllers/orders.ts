import { Request, Response } from "express";

export const getOrders = async (_req: Request, res: Response) => {

    return res.status(200).json({ orders:"test" })
}
