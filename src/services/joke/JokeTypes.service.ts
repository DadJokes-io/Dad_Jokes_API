import { mongoService } from '../..';

export const jokeTypesService = async () => {
  try {
    const result = await mongoService
    .db('Jokes')
    .collection('Types')
    .find({})
    .toArray()

    return { success: true, body: result }
  } catch (error) {
    throw error
  }
}