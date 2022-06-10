import Products from '../interfaces/interfaceProduct';
import connection from '../models/connection';
import ProducstModel from '../models/modelProducts';

export default class ProductsService {
  public allProductsModel: ProducstModel;

  constructor() {
    this.allProductsModel = new ProducstModel(connection);
  }

  public async getAllProductsService(): Promise<Products[]> {
    const products = await this.allProductsModel.getAllProductsModel();
    return products;
  }

  public async createProductService(product: Products) {
    const productCreated = await this.allProductsModel.createProductModel(product);
    return productCreated;
  }
}
