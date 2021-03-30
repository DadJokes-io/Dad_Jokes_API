import { mongoService } from '../..';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const profileUserService = async (sessionToken: string | undefined) => {
  try {
    if (typeof sessionToken === 'undefined') {
      throw new Error('session Token no present');
    }

    const secret = process.env.PRIVATE_KEY as string;
    jwt.verify(sessionToken, secret, (err, decoded) => {
      if (err) {
        throw new Error('invaild session token');
      }
    });

    const result = await mongoService
      .db('Users')
      .collection('Profile')
      .find({ $text: { $search: `"${sessionToken}"` } })
      .toArray();

    return { success: true, body: result };
  } catch (err) {
    console.log(err);
    return { success: false, error: err.message };
  }
};
