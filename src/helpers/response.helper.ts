import { Response } from 'express';

interface OptionsInterface {
  code?: number;
  message?: string;
  data?: any;
}

export const responseSuccess = (res: Response, options: OptionsInterface) => {
  const code = options.code || 100;
  const message = options.message || 'success';
  const data = options.data || null;

  return res.status(200).json({
    code,
    message,
    data,
  });
};

export const responseError = (res: Response, options: OptionsInterface) => {
  const code = options.code || 500;
  const message = options.message || 'something went wrong!';

  return res.status(400).json({
    code,
    message,
  });
};
