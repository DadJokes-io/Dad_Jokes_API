import { ObjectId } from 'mongodb';
import { mongoService } from '..';

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    jokeRandom: async () => {
      return await mongoService
        .db('Jokes')
        .collection('DadJokes')
        .aggregate([{ $sample: { size: 1 } }])
        .toArray();
    },
    jokeSearch: async (parent: any, args: any, context: any, info: any) => {
      return await mongoService
        .db('Jokes')
        .collection('DadJokes')
        .find({ $text: { $search: args.term } })
        .toArray();
    },
    jokeByID: async (parent: any, args: any) => {
      const oId = new ObjectId(args.id);
      return await mongoService.db('Jokes').collection('DadJokes').findOne({ _id: oId });
    },
    jokeByType: async (parent: any, args: any) => {
      const type = args.type;
      return await mongoService.db('Jokes').collection('DadJokes').find({ type }).toArray();
    },
  },
};
