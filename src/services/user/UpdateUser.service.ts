import { mongoService } from '../..';
import oID from '../../util/oID';
import { jokeByIdService } from '../joke/JokeById.service';
import { authUser } from './authUser.service';

type UpdateUserPayload = {
  photoUrl?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  bio?: string;
};

export const UpdateUserService = async (
  sessionToken: string | undefined,
  updatePayload: UpdateUserPayload,
) => {
  try {
    const user = await authUser(sessionToken);

    if (user instanceof Error) throw user;

    const updatedOptions = {
      ...user,
      ...updatePayload,
    };

    console.log(updatedOptions);

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: err.message };
  }
};
