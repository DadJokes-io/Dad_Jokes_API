require('dotenv').config();
import mongodb from 'mongodb';
import OpenAI from 'openai';

const port = process.env.PORT || 8080;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://${user}:${password}@${host}`;
export const mongoService = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const retryConnection = () => {
  mongoService.connect().then(() => {
    console.log('connected to db successfully')
  }).catch((e) => {
    console.error(e);
    retryConnection();
  });
};

export const openai = new OpenAI({
  organization: "org-xnieWBbywbsTsuzg0NO5JhAN",
  apiKey: process.env.OPENAI_API_KEY,
});

retryConnection();

import app from './app';

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
