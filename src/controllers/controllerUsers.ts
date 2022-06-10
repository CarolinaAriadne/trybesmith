import { Request, Response } from 'express';
import UsersService from '../services/serviceUsers';
import User from '../interfaces/interfaceUser';

class UsersController {
  public createUser: UsersService;
  
  constructor() {
    this.createUser = new UsersService();
  }

  public createUserController = async (req: Request, res: Response) => {
    console.log('here');
    const user: User = req.body;
    const token = await this.createUser.createUsertService(user);
    res.status(201).json({ token });
  };
}

export default UsersController;