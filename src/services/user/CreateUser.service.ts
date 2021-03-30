import { mongoService } from '../..';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { accountExistService } from './accountExist.service';
require('dotenv').config();

interface Body {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string | null;
  photoUrl: string | null;
}

export const createUserService = async (body: Body) => {
  try {
    const hash = await bcrypt.hash(body.password, 10);
    const secret = process.env.PRIVATE_KEY as string;
    const token = jwt.sign(
      {
        name: `${body.firstName} ${body.lastName}`,
        email: body.email,
        company: body.company,
        photoUrl: body.photoUrl,
      },
      secret,
    );
    const hasAccount = await accountExistService(body.email);
    if (hasAccount.body?.length) {
      return { success: false, error: `Account already created with ${body.email}` };
    }
    const result = await mongoService.db('Users').collection('Profile').insertOne({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      company: body.company,
      password: hash,
      sessionToken: token,
      photoUrl: body.company,
    });
    return { success: true, body: result.ops[0] };
  } catch (err) {
    return { success: false, error: err };
  }
};
