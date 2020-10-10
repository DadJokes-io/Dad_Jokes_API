import { Request, Response, NextFunction, RequestHandler } from 'express';

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export default (handler: AsyncRequestHandler): RequestHandler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  };
};
