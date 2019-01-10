import { Request, Response, Router } from 'express';
import UserModel from '../models/user.model';

export class UserController {
  public static routes(): Router {
    return Router().get('/', async (request: Request, response: Response) => {

      const users = await UserModel.find({}).exec();

      response.json(users);
    }).post('/', async (request: Request, response: Response) => {

      const user = await UserModel.create(request.body);

      response.status(200).json(user);
    });
  }
}

export default UserController;
