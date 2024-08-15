import { Request, Response } from "express";
import { connection } from "../database";

export const getOrders = async (_req: Request, res: Response) => {

    try {
        const connections = await connection();
        console.log(connections);
    } catch (error) {
        console.log(error);

    }


    return res.status(200).json({ orders: "test" })
}
