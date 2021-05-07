import { mongoService } from '../..';
import { User } from '../../models/user';
import oID from '../../util/oID';
import { countTypeService } from '../type/CountType.service';
import { authUser } from '../user/authUser.service';
import { jokeByIdService } from './JokeById.service';

export const deleteJokeService = async (sessionToken: string | undefined, id: string) => {
  try {
    const user = await authUser(sessionToken);

    if (user instanceof Error) throw user;

    const joke = await jokeByIdService(id);

    if (!joke.body) throw new Error('Joke does not exist');

    const typeExist = await countTypeService(joke.body?.type);

    if (!typeExist.body) throw new Error('Type does not exist');

    const postIndex = user.posts.findIndex((p) => p == id);
    user.posts.splice(postIndex, 1);

    if (String(joke.body?.author.id) == String(user._id) || user.admin) {
      await mongoService
        .db('Jokes')
        .collection('DadJokes')
        .deleteOne({ _id: oID(id) });
      if (user.admin) {
        const unknownUserID = joke.body?.author.id;

        const unknownUser = (await mongoService
          .db('Users')
          .collection('Profile')
          .findOne({ _id: unknownUserID })) as User;

        const index = unknownUser.posts.findIndex((p) => p == id);
        unknownUser.posts.splice(index, 1);

        await mongoService
          .db('Users')
          .collection('Profile')
          .updateOne(
            {
              _id: unknownUserID,
            },
            { $set: { posts: unknownUser.posts } },
          );
      } else {
        await mongoService
          .db('Users')
          .collection('Profile')
          .updateOne(
            {
              _id: oID(user._id),
            },
            { $set: { posts: user.posts } },
          );
      }

      await mongoService
        .db('Jokes')
        .collection('Types')
        .updateOne(
          {
            _id: typeExist.body?._id,
          },
          { $set: { postCount: typeExist.body?.postCount - 1 } },
        );
    } else {
      throw new Error('unauthorized to delete this joke');
    }

    return { success: true, body: joke.body };
  } catch (err) {
    return { success: false, error: err.message };
  }
};
