import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { randomRouter } from './routes/random';
import { jokeRouter } from './routes/joke';
import { userRouter } from './routes/user';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

class App {
  server = new ApolloServer({ typeDefs, resolvers });
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(helmet({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false }));
    this.app.use(morgan('combined'));
    const app = this.app;
    this.server.applyMiddleware({ app });

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }

  private routes(): void {
    this.app.use('/api/random', randomRouter);
    this.app.use('/api/joke', jokeRouter);
    this.app.use('/api/jokes', jokeRouter);
    this.app.use('/api/user', userRouter);
  }
}

export default new App().app;
