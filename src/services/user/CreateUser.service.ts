import { mongoService } from '../..';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { accountExistService } from './accountExist.service';
import 'dotenv';

interface Body {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  photoUrl: string | null;
  displayName: string;
}

export const createUserService = async (body: Body) => {
  try {
    const hash = await bcrypt.hash(body.password, 10);
    const secret = process.env.PRIVATE_KEY as string;
    const token = jwt.sign(
      {
        name: `${body.firstName} ${body.lastName}`,
        email: body.email,
        photoUrl: body.photoUrl,
        displayName: body.displayName,
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
      password: hash,
      sessionToken: token,
      photoUrl: body.photoUrl,
      displayName: body.displayName,
      likes: [],
      posts: [],
    });
    return { success: true, body: result.ops[0] };
  } catch (err) {
    return { success: false, error: err };
  }
};
