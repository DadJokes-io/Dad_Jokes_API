import { ObjectID } from 'mongodb';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sessionToken: string;
  photoUrl: string;
  displayName: string;
  likes: string[];
  posts: string[];
  admin: boolean;
  _id: string;
};

type UserLikeInformation = {
  id: string;
  displayName: string;
};

export { User, UserLikeInformation };
