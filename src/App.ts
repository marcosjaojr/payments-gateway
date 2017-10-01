import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import PaymentRouter from './routes/PaymentRouter';

// Creates and configures an ExpressJS web server.
class App {

    // ref to express instance
  public express: express.Application;

    // Run configuration methods on Express instance.
  constructor() {
    this.express = express();
    this.middlaware();
    this.routes();
  }

  // Configure Express middleware.
  private middlaware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/v1/payments', PaymentRouter);
  }
}

export default new App().express;
