import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const validateAmountErr400 = joi.object({
  amount: joi.string().required().messages({
    'any.required': '"amount" is required',
    
  }),
});

const validateAmountErr22 = joi.object({
  amount: joi.string().min(3).messages({
    'string.min': '"amount" length must be at least 3 characters long',
    'any.required': '"amount" must be a string', 
  }),
});

export const verifyAmountErr400 = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  
  const { error } = validateAmountErr400.validate({ amount });
  
  if (error) return res.status(400).json({ message: error.message });

  next();
};
  
export const verifyAmountErr422 = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const { error } = validateAmountErr22.validate({ amount });
    
  if (error) return res.status(422).json({ message: error.message });
  next();
};
