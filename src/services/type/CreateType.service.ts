import { mongoService } from '../..';
import oID from '../../util/oID';
import { authUser } from '../user/authUser.service';
import { CreateType } from '../../models/type';
import { countTypeService } from './CountType.service';

export const createTypeService = async (sessionToken: string | undefined, body: CreateType) => {
  try {
    const user = await authUser(sessionToken);

    if (user instanceof Error) throw user;

    const findType = await countTypeService(body.type);

    if (findType) throw new Error('Must have unique type name');

    const result = await mongoService
      .db('Jokes')
      .collection('Types')
      .insertOne({
        type: body.type,
        color: body.color,
        author: {
          name: user.displayName,
          id: oID(user._id),
        },
        date: Math.floor(new Date().getTime() / 1000),
        postCount: 0,
      });

    return { success: true, body: result.ops[0] };
  } catch (err) {
    return { success: false, error: err.message || err };
  }
};
