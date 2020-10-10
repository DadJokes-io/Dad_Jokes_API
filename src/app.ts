import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helment from 'helmet';
import { RandomRouter } from './routes/random';
import { JokeRouter } from './routes/joke';

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
    this.app.use(helment());
    this.app.use(morgan('combined'));

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }

  private routes(): void {
    this.app.use('/api/random', RandomRouter);
    this.app.use('/api/joke', JokeRouter);
  }
}

export default new App().app;
