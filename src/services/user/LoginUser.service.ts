import bcrypt from 'bcryptjs';
import { accountExistService } from './accountExist.service';

interface Body {
  email: string;
  password: string;
}

export const loginUserService = async (body: Body) => {
  try {
    const account = await accountExistService(body.email);
    const comparePass = await bcrypt.compare(
      body.password,
      account.body ? (account.body.length ? account.body[0].password : '') : '',
    );
    if (comparePass && account.body) {
      return { success: true, body: account.body[0] };
    }
    if (!account.body?.length) {
      throw new Error(`account with ${body.email} doesn't exist`);
    }
    if (!comparePass) {
      throw new Error(`Incorrect password entered`);
    }
  } catch (err) {
    return { success: false, error: err.message || err };
  }
};
