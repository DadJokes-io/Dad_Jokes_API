import { mongoService } from '../..';
import oID from '../../util/oID';
import { jokeByIdService } from '../joke/JokeById.service';
import { authUser } from './authUser.service';

export const UnlikeJokeService = async (sessionToken: string | undefined, jokeId: string) => {
  try {
    const user = await authUser(sessionToken);
    const joke = await jokeByIdService(jokeId);

    if (user instanceof Error) throw user;

    const indexUserLiked = user.likes.findIndex((id) => id == jokeId);
    const indexPostLiked = joke.body?.likes.findIndex((j) => j.id == user._id);

    user.likes.splice(indexUserLiked, 1);

    if (typeof indexPostLiked === 'undefined') throw new Error('User never liked post');
    joke.body?.likes.splice(indexPostLiked, 1);

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
