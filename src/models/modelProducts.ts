import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/interfaceProduct';
// import User from '../interfaces/interfaceUser';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProductsModel(): Promise<Products[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as Products[];
  }

  public async createProductModel(product: Products) {
    const { name, amount } = product;

    const query = 'INSERT INTO  Trybesmith.Products (name, amount) VALUES (?,?)';
    const [values] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    const { insertId: id } = values;

    const newProduct: Products = { id, ...product };
    return newProduct;
  }

  public async getProductsById(orderId: number): Promise<Products[]> {
    const [values] = await this.connection
      .execute('SELECT * FROM  Trybesmith.Products WHERE orderId = ?', [orderId]);

    return values as Products[];
  }
}
