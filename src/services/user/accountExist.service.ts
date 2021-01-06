import { mongoService } from '../..';

interface Body {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string | null;
  sessionToken: string;
}

export const accountExistService = async (email: string) => {
  try {
    const result: Body[] = await mongoService
      .db('Users')
      .collection('Profile')
      .find({ $text: { $search: `"${email}"` } })
      .toArray();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
