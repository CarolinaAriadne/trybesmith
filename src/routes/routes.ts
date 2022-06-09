import express from 'express';

import ProductsController from '../controllers/listProducts';

const router = express.Router();

const productsController = new ProductsController();

router.get('/', productsController.getAllProductsController);

export default router;