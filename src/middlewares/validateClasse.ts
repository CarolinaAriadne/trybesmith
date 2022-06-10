import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const validateClasseErr400 = joi.object({
  classe: joi.string()
    .required()
    .messages({
      'any.required': '"classe" is required',
    }),
});
  
const validateClasseErr22 = joi.object({
  classe: joi.string()
    .min(3)
    .messages({
      'string.min': '"classe" length must be at least 3 characters long',
      'any.required': '"classe" must be a string', 
    }),
});
export const verifyClasseErr400 = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  
  const { error } = validateClasseErr400.validate({ classe });
  console.log(error, 'error');
  if (error) return res.status(400).json({ message: error.message });
  
  next();
};
  
export const verifyClasseErr422 = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  const { error } = validateClasseErr22.validate({ classe });
  
  if (error) return res.status(422).json({ message: error.message });
  next();
};
