import { ObjectID } from 'mongodb';
import { UserLikeInformation } from './user';

type Joke = {
  _id: string;
  type: string;
  punchLine: string;
  likes: Array<UserLikeInformation>;
  author: {
    name: string;
    id: ObjectID;
  };
  date: string;
  approved: boolean;
};

type CreateJokeBody = {
  type: string;
  setup: string;
  punchline: string;
};

export { Joke, CreateJokeBody };
