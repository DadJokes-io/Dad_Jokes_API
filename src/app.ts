import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { randomRouter } from './routes/random';
import { jokeRouter } from './routes/joke';

class App {
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
    this.app.use(helmet());
    this.app.use(morgan('combined'));

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }

  private routes(): void {
    this.app.use('/api/random', randomRouter);
    this.app.use('/api/joke', jokeRouter);
    this.app.use('/api/jokes', jokeRouter);
  }
}

export default new App().app;
