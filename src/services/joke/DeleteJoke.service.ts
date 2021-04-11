import { mongoService } from '../..';
import { User } from '../../models/user';
import oID from '../../util/oID';
import { authUser } from '../user/authUser.service';
import { jokeByIdService } from './JokeById.service';

export const deleteJokeService = async (sessionToken: string | undefined, id: string) => {
  try {
    const user = await authUser(sessionToken);

    if (user instanceof Error) throw user;

    const joke = await jokeByIdService(id);

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
    } else {
      throw new Error('unauthorized to delete this joke');
    }

    return { success: true, body: joke.body };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// 60725a24fcd7ead8ba384a87

// 60725a24fcd7ead8ba384a87
