require('dotenv').config();
import MongoDB from 'mongodb';
const port = process.env.PORT || 8080;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

const MongoClient = MongoDB.MongoClient;
const uri = `mongodb+srv://${user}:${password}@${host}`;
export const MongoService = new MongoClient(uri, { useNewUrlParser: true });
MongoService.connect();

import app from './app';

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
