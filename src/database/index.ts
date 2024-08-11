import { createConnection } from 'mysql2/promise';

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'moviesdb'
}

export const connection = await createConnection(DEFAULT_CONFIG);