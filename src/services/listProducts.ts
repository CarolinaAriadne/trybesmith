import Products from '../interfaces/interfaceProduct';
import connection from '../models/connection';
import ProducstModel from '../models/listProducts';

export default class ProductsService {
  public allProductsModel: ProducstModel;

  constructor() {
    this.allProductsModel = new ProducstModel(connection);
  }

  public async getAllProductsService(): Promise<Products[]> {
    const products = await this.allProductsModel.getAllProductsModel();
    return products;
  }
}
