import connection from '../models/connection';
import { Order1 } from '../interfaces/interfaceOrder';
import OrderModel from '../models/modelOrders';
import ProductsModel from '../models/modelProducts';

export default class OrdersService {
  public orders: OrderModel;

  public products: ProductsModel;
  
  constructor() {
    this.orders = new OrderModel(connection);
    this.products = new ProductsModel(connection);
  }

  public async getAllOrdersService(): Promise<Order1[]> {
    const orders = await this.orders.getAllOrdersModel();
    
    const getProductsId = await Promise.all(
      orders.map(async (order) => {
        const orderProducts = await this.products.getProductsById(order.id);
        const idFromProducts = orderProducts.map((product) => product.id);
        const value = {
          id: order.id,
          userId: order.userId,
          productsIds: idFromProducts,
        };
        return value;
      }),

    );

    return getProductsId;
  }
}