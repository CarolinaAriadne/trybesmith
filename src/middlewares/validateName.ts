import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const validateNameErr400 = joi.object({
  name: joi.string()
    .required()
    .messages({
      'any.required': '"name" is required',
    }),
});

const validateNameErr22 = joi.object({
  name: joi.string()
    .min(3)
    .messages({
      'string.min': '"name" length must be at least 3 characters long',
      'any.required': '"name" must be a string', 
      
    }),
});

export const verifyNameErr400 = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  const { error } = validateNameErr400.validate({ name });
  console.log(error?.details[0].type, 'error');
  if (error) return res.status(400).json({ message: error.message });

  next();
};

export const verifyNameErr422 = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const { error } = validateNameErr22.validate({ name });

  if (error) return res.status(422).json({ message: error.message });
  next();
};
