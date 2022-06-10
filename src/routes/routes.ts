import express from 'express';

import ProductsController from '../controllers/controllerProducts';
import OrdersController from '../controllers/controllerOrders';

import { verifyNameErr400, verifyNameErr422 } from '../middlewares/validateName';
import { verifyAmountErr400, verifyAmountErr422 } from '../middlewares/validateAmount';
import { verifyUserNameErr400, verifyUserNameErr422 } from '../middlewares/validateUsername';
import { verifyClasseErr400, verifyClasseErr422 } from '../middlewares/validateClasse'; 
import { verifyLevelErr400, verifyLevelErr422 } from '../middlewares/validateLevel';
import { verifyPasswordErr400, verifyPasswordErr422 } from '../middlewares/validatePassword';
import UsersController from '../controllers/controllerUsers';

const router = express.Router();

const productsController = new ProductsController();
const usersController = new UsersController();
const ordersController = new OrdersController();

router.post(
  '/users',
  verifyUserNameErr422,
  verifyUserNameErr400,
  verifyClasseErr422,
  verifyClasseErr400,
  verifyLevelErr422,
  verifyLevelErr400,
  verifyPasswordErr422,
  verifyPasswordErr400,
  usersController.createUserController,

);

router.get('/products', productsController.getAllProductsController);

router.post(
  '/products', 
  verifyNameErr422,
  verifyNameErr400, 
  verifyAmountErr422, 
  verifyAmountErr400,
  productsController.createProductController,
);

router.get('/orders', ordersController.getAllOrdersController);

export default router;