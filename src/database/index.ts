import { Pool, PoolOptions, createPool } from 'mysql2/promise';

// Database config
const DEFAULT_CONFIG: PoolOptions = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'dely_app',
};

class Database {
  private config = DEFAULT_CONFIG;
  private pool: Pool | null = null;

  // Método para conectar al pool
  public async connect(): Promise<Pool> {
    if (!this.pool) {
      this.pool = createPool(this.config);
      console.log('Pool de conexiones creado');
    }
    return this.pool;
  }

  // Método para desconectar el pool
  public async disconnect(): Promise<void> {
    if (this.pool) {
      await this.pool.end();
      this.pool = null;
      console.log('Pool de conexiones cerrado');
    }
  }
}

export default Database;