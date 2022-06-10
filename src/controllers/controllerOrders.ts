import { Request, Response } from 'express';

import OrdersService from '../services/serviceOrders';
// import { OrderModel } from '../models/modelOrders';

class OrdersController {
  public ordersService:OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  public getAllOrdersController = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAllOrdersService();
    res.status(200).json(orders);
  };
}

export default OrdersController;