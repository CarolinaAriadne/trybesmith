import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const validateLevelErr400 = joi.object({
  level: joi.number()
    .required()
    .messages({
      'any.required': '"level" is required',
    }),
});
  
const validateLevelErr22 = joi.object({
  level: joi.number()
    .min(1)
    .messages({
      'number.min': '"level" must be greater than or equal to 1',
      'any.required': '"level" must be a number', 
    }),
});
export const verifyLevelErr400 = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  
  const { error } = validateLevelErr400.validate({ level });
  console.log(error, 'error');
  if (error) return res.status(400).json({ message: error.message });
  
  next();
};
  
export const verifyLevelErr422 = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const { error } = validateLevelErr22.validate({ level });
  
  if (error) return res.status(422).json({ message: error.message });
  next();
};
