import jwt from 'jsonwebtoken';
import User from '../interfaces/interfaceUser';

const jwtSecret = 'mysecret';

const token = (user: User) => {
  const generateToken = jwt.sign({ user }, jwtSecret, {
    expiresIn: '45d',
    algorithm: 'HS256',
  });

  return generateToken;
};

export default token;
