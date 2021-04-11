import { mongoService } from '../..';
import jwt from 'jsonwebtoken';
import 'dotenv';
import { User } from '../../models/user';

export const authUser = async (sessionToken: string | undefined): Promise<User | Error> => {
  try {
    if (typeof sessionToken === 'undefined') throw new Error('session Token no present');

    const secret = process.env.PRIVATE_KEY as string;
    jwt.verify(sessionToken, secret, (err, decoded) => {
      if (err) {
        throw new Error('invaild session token');
      }
    });

    const result: User[] = await mongoService
      .db('Users')
      .collection('Profile')
      .find({ $text: { $search: `"${sessionToken}"` } })
      .toArray();

    return result[0];
  } catch (err) {
    console.error(err);
    return err;
  }
};
