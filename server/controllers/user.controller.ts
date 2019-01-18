import * as express from 'express';
import 'reflect-metadata';
import { ApiOperationGet, ApiOperationPost, ApiPath, SwaggerDefinitionConstant, } from 'swagger-express-ts';
import UserModel from '../models/user.model';

@ApiPath({
  description: 'User Controller',
  name: 'User Controller',
  path: '/api/users',
  // security: { apiKeyHeader: [] }, - use if route is protected
})
export class UserController {

  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/', this.getUsers);
    this.router.post('/', this.createUser);
  }

  public getRouter(): express.Router {
    return this.router;
  }

  @ApiOperationGet({
    description: 'Get user list',
    responses: {
      200: {
        model: 'User',
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
      },
    },
    /* security: { - use if route is protected
      apiKeyHeader: [],
    }, */
    summary: 'Get users list',
  })
  private async getUsers(
    request: express.Request,
    response: express.Response
  ): Promise<void> {
    const users = await UserModel.find({}).exec();
    response.status(200).json(users);
  }

  @ApiOperationPost({
    description: 'Post user object',
    parameters: {
      body: {
        description: 'New user',
        model: 'User',
        required: true,
      },
    },
    responses: {
      200: {
        model: 'User',
      },
      400: { description: 'Parameters fail' },
    },
    /* security: { - use if route is protected
      apiKeyHeader: [],
    }, */
    summary: 'Post new user',
  })
  private async createUser(
    request: express.Request,
    response: express.Response
  ): Promise<void> {
    const user = await UserModel.create(request.body);
    response.status(200).json(user);
  }

}

export default UserController;
