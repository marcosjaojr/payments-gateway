import { Router, Request, Response, NextFunction } from 'express';

export class PaymentRouter {
  router: Router;

  /**
   * Initialize the PaymentRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.status(200).json([{
      id: 10101,
      card: {},
      installments: 1,
      metadata: {},
    }]);
  }

  public create(req: Request, res: Response, next: NextFunction) {
    res.status(201).send({
      message: 'payment created',
    });
  }

  init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.create);
  }
}

export default new PaymentRouter().router;
