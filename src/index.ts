require('dotenv').config();
import mongodb from 'mongodb';
const port = process.env.PORT || 8080;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://${user}:${password}@${host}`;
//const uri = `mongodb://localhost:27017`;
export const mongoService = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const retryConnection = () => {
  mongoService.connect().catch((e) => {
    console.error(e);
  });
};

retryConnection();

import app from './app';

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
