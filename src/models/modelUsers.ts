import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/interfaceUser';

export default class UsersModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUserModel(user: User) {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO  Trybesmith.Users
     (username, classe, level, password) VALUES (?,?,?,?)`;
    const [values] = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    const { insertId: id } = values;

    const newUser: User = { id, ...user };
    return newUser;
  }
}
