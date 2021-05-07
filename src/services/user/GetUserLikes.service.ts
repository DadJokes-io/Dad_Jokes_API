import { mongoService } from '../..';
import { User } from '../../models/user';
import oID from '../../util/oID';

export const getUserLikesService = async (userId: string) => {
  try {
    const user: User | null = await mongoService
      .db('Users')
      .collection('Profile')
      .findOne({ _id: oID(userId) });

    if (!user) throw new Error('user does not exist');

    const userLikes = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .find({
        _id: {
          $in: [...user.likes],
        },
      })
      .toArray();

    return { success: true, body: userLikes };
  } catch (error) {
    return { success: false, body: error };
  }
};
