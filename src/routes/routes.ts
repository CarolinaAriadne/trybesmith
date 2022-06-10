import express from 'express';

import ProductsController from '../controllers/controllerProducts';

import { verifyNameErr400, verifyNameErr422 } from '../middlewares/validateName';
import { verifyAmountErr400, verifyAmountErr422 } from '../middlewares/validateAmount';

const router = express.Router();

const productsController = new ProductsController();

router.get('/', productsController.getAllProductsController);
router.post(
  '/', 
  verifyNameErr422,
  verifyNameErr400, 
  verifyAmountErr422, 
  verifyAmountErr400,
  productsController.createProductController,
);

export default router;