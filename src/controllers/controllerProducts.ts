import { Request, Response } from 'express';
import ProductsService from '../services/serviceProducts';
import Products from '../interfaces/interfaceProduct';

class ProductsController {
  public productService: ProductsService;

  constructor() {
    this.productService = new ProductsService();
  }

  public getAllProductsController = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProductsService();
    res.status(200).json(products);
  };
  
  public createProductController = async (req: Request, res: Response) => {
    console.log('here');
    const product:Products = req.body;
    const newProduct = await this.productService.createProductService(product);
    res.status(201).json(newProduct);
  };
}

export default ProductsController;