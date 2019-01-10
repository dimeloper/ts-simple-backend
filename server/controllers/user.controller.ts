import { Request, Response, Router } from 'express';
import UserModel from '../models/user.model';

export class UserController {
  public static routes(): Router {
    return Router().get('/', async (request: Request, response: Response) => {

      const users = await UserModel.find({}).exec();

      response.json(users);
    }).post('/', async (request: Request, response: Response) => {
      let user = null;
      try {
        user = await UserModel.create(request.body);
      } catch (e) {
        console.error(e);
      }

      response.status(200).json(user);
    });
  }
}

export default UserController;
