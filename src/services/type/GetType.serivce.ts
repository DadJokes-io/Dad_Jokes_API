import { mongoService } from '../..';

export const getTypeService = async () => {
  try {
    const result = await mongoService.db('Jokes').collection('Types').find().toArray();
    return { success: true, body: result };
  } catch (err) {
    return { success: false, error: err };
  }
};
