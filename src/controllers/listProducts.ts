import { Request, Response } from 'express';
import ProductsService from '../services/listProducts';

class ProductsController {
  public allProductsService: ProductsService;

  constructor() {
    this.allProductsService = new ProductsService();
  }

  public getAllProductsController = async (_req: Request, res: Response) => {
    const products = await this.allProductsService.getAllProductsService();
    res.status(200).json(products);
  };
}

export default ProductsController;