import { Request, Response, Router } from 'express';

class HealthController {
  public static routes(): Router {
    return Router().get('/', (req: Request, res: Response) => {
      res.send('healthy');
    });
  }
}

export default HealthController;
