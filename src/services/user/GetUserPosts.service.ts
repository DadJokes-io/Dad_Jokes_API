import { mongoService } from '../..';
import { User } from '../../models/user';
import oID from '../../util/oID';

export const getUserPostService = async (userId: string) => {
  try {
    const user: User | null = await mongoService
      .db('Users')
      .collection('Profile')
      .findOne({ _id: oID(userId) });

    if (!user) throw new Error('user does not exist');

    console.log(user.posts);

    const userPosts = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({
        _id: {
          $in: [...user.posts],
        },
      })
      .toArray();

    return { success: true, body: userPosts };
  } catch (error) {
    return { success: false, body: error };
  }
};
