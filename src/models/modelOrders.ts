import { Pool } from 'mysql2/promise';
import { Order2 } from '../interfaces/interfaceOrder';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrdersModel(): Promise<Order2[]> {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    return orders as Order2[];
  } 
}