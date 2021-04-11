import { ObjectId } from 'mongodb';

const oID = (_id: string): ObjectId => {
  return new ObjectId(_id);
};

export default oID;
