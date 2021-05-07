import { mongoService } from '../..';
import oID from '../../util/oID';
import { jokeByIdService } from '../joke/JokeById.service';
import { authUser } from './authUser.service';

export const LikeJokeService = async (sessionToken: string | undefined, jokeId: string) => {
  try {
    const user = await authUser(sessionToken);
    const joke = await jokeByIdService(jokeId);

    if (user instanceof Error) throw user;

    user.likes.push(oID(jokeId) as any);
    joke.body?.likes.push({ id: user._id, displayName: user.displayName });

    await mongoService
      .db('Users')
      .collection('Profile')
      .updateOne(
        {
          _id: oID(user._id),
        },
        { $set: { likes: user.likes } },
      );

    await mongoService
      .db('Jokes')
      .collection('DadJokes')
      .updateOne({ _id: oID(jokeId) }, { $set: { likes: joke.body?.likes } });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: err.message };
  }
};
