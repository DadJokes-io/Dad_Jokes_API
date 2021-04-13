import { mongoService } from '../..';
import oID from '../../util/oID';
import { User } from '../../models/user';

export const publicUserService = async (_id: string) => {
  try {
    const user = (await mongoService
      .db('Users')
      .collection('Profile')
      .findOne({ _id: oID(_id) })) as User;

    const result = {
      displayName: user.displayName,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      likes: user.likes,
      posts: user.posts,
      photoUrl: user.photoUrl,
      bio: user.bio,
    };

    return { success: true, body: result };
  } catch (err) {
    console.log(err);
    return { success: false, error: err.message };
  }
};
