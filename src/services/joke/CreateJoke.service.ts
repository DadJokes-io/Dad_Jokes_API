import { mongoService } from '../..';
import { CreateJokeBody } from '../../models/joke';
import oID from '../../util/oID';
import { countTypeService } from '../type/CountType.service';
import { authUser } from '../user/authUser.service';

export const createJokeService = async (sessionToken: string | undefined, body: CreateJokeBody) => {
  try {
    const user = await authUser(sessionToken);

    if (user instanceof Error) throw user;

    const typeExist = await countTypeService(body.type);

    if (!typeExist.body) throw new Error('Must choose an existing type');

    const result = await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .insertOne({
        type: body.type,
        punchline: body.punchline,
        setup: body.setup,
        author: {
          name: user.displayName,
          id: oID(user._id),
        },
        likes: [],
        date: Math.floor(new Date().getTime() / 1000),
        approved: false,
      });

    const jokeId = result.ops[0]._id as string;
    user.posts.push(jokeId);

    await mongoService
      .db('Users')
      .collection('Profile')
      .updateOne({ _id: oID(user._id) }, { $set: { posts: user.posts } });

    await mongoService
      .db('Jokes')
      .collection('Types')
      .updateOne(
        {
          _id: oID(typeExist.body?._id),
        },
        {
          $set: { postCount: typeExist.body?.postCount + 1 },
        },
      );

    return { success: true, body: result.ops[0] };
  } catch (err) {
    return { success: false, error: err.message || err };
  }
};
