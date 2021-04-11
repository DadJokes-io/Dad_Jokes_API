import { Request } from 'express';

const sessionToken = (req: Request) => {
  return req.headers.authorization?.split(' ')[1];
};

export default sessionToken;
