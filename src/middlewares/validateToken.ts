// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';

// // const jwt = require('jsonwebtoken');

// const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { authorization } = req.headers;

//     if (!authorization) {
//       throw new
//     }

//     const decoded = jwt.verify(authorization, 'mysecret');
//   } catch (err) {
//     next(err);
//   }
// };

// export default verifyToken;