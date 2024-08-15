import { createConnection } from 'mysql2/promise';

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'dely_app'
}

export const connection = async () => {
  try {
    const connection = await createConnection(DEFAULT_CONFIG);
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}