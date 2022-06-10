import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const validatePasswordErr400 = joi.object({
  password: joi.string()
    .required()
    .messages({
      'any.required': '"password" is required',
    }),
});
  
const validatePasswordErr22 = joi.object({
  password: joi.string()
    .min(9)
    .messages({
      'number.min': '"password" length must be at least 8 characters long',
      'any.required': '"password" must be a number', 
    }),
});
export const verifyPasswordErr400 = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  
  const { error } = validatePasswordErr400.validate({ password });
  console.log(error, 'error');
  if (error) return res.status(400).json({ message: error.message });
  
  next();
};
  
export const verifyPasswordErr422 = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const { error } = validatePasswordErr22.validate({ password });
  
  if (error) return res.status(422).json({ message: error.message });
  next();
};
