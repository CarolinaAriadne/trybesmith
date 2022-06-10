import User from '../interfaces/interfaceUser';
import connection from '../models/connection';
import UsersModel from '../models/modelUsers';
import token from '../helspers/token';

export default class UsersService {
  public createUser: UsersModel;
  
  constructor() {
    this.createUser = new UsersModel(connection);
  }

  public async createUsertService(user: User) {
    const userCreated = await this.createUser.createUserModel(user);
    return token(userCreated);
  }
}