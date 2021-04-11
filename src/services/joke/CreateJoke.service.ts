import { mongoService } from '../..';
import { CreateJokeBody } from '../../models/joke';
import oID from '../../util/oID';
import { authUser } from '../user/authUser.service';

export const createJokeService = async (sessionToken: string | undefined, body: CreateJokeBody) => {
  try {
    const user = await authUser(sessionToken);

    if (user instanceof Error) throw user;

    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .insertOne({
        ...body,
        author: {
          name: user.displayName,
          id: oID(user._id),
        },
        date: Math.floor(new Date().getTime() / 1000),
        approved: false,
      });

    const jokeId = result.ops[0]._id as string;
    user.posts.push(jokeId);

    await mongoService
      .db('Users')
      .collection('Profile')
      .updateOne({ _id: oID(user._id) }, { $set: { posts: user.posts } });

    return { success: true, body: result.ops[0] };
  } catch (err) {
    return { success: false, error: err };
  }
};
