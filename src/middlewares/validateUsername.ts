import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const validateUserNameErr400 = joi.object({
  username: joi.string()
    .required()
    .messages({
      'any.required': '"username" is required',
    }),
});
  
const validateUserNameErr22 = joi.object({
  username: joi.string()
    .min(3)
    .messages({
      'string.min': '"username" length must be at least 3 characters long',
      'any.required': '"username" must be a string', 
    }),
});
export const verifyUserNameErr400 = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  
  const { error } = validateUserNameErr400.validate({ username });
  console.log(error, 'error');
  if (error) return res.status(400).json({ message: error.message });
  
  next();
};
  
export const verifyNameErr422 = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const { error } = validateUserNameErr22.validate({ username });
  
  if (error) return res.status(422).json({ message: error.message });
  next();
};
