import { Pool } from 'mysql2/promise';
import Products from '../interfaces/interfaceProduct';

export default class ProducstModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProductsModel(): Promise<Products[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as Products[];
  }
}
