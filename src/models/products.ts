import Database from "../database";
import { ResultSetHeader, /* RowDataPacket */ } from "mysql2/promise"

class Product {
    private db: Database;

    constructor() {
        this.db = new Database();
    }

    private async getConnection() {
        const pool = await this.db.connect();
        return pool.getConnection();
    }

    public async getAll() {
        const connection = await this.getConnection();
        try {
            const query = 'SELECT * FROM Products';
            const result = await connection.execute(query);
            return result;
        } catch (error) {
            console.log(error);
        } finally {
            connection.release();
        }
    }

    public async addProduct(name: string, price: number): Promise<number> {
        const connection = await this.getConnection();
        try {
            const query = 'INSERT INTO products (name, price) VALUES (?, ?)';
            const [result] = await connection.execute(query, [name, price]);
            return (result as ResultSetHeader).insertId; // Usa el tipo adecuado para el resultado
        } finally {
            connection.release();
        }
    }
}

export const ProductModel = new Product();
