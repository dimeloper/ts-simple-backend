import bodyParser from 'body-parser';
import express from 'express';
import * as path from 'path';
import * as swagger from 'swagger-express-ts';

import HealthController from './controllers/health.controller';
import UserController from './controllers/user.controller';

/**
 * The server.
 *
 * @class ExpressApp
 */
export class App {
  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): App {
    return new App();
  }

  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    // create expressjs application
    this.app = express();

    // configure application
    this.config();

    // configure error handling
    this.errorConfig();

    // add routes
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config(): void {
    // use json form parser middlware
    this.app.use(bodyParser.json());

    // use query string parser middlware
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );

    this.app.use(swagger.express(
      {
          definition : {
            externalDocs : {
              url : 'Typescript Seed URL'
            },
            info : {
              title : 'Typescript Seed API' ,
              version : '1.0'
            }
          }
      }
    ));
  }

  /**
   * Configure error handling
   *
   * @class Server
   * @method errorConfig
   */
  public errorConfig(): void {
    this.app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
      console.error(err.stack);
      response.status(500).send('Something broke!');
  } );
  }

  /**
   * Create router
   *
   * @class Server
   * @method api
   */
  public routes(): void {
    this.app.use('/health', HealthController.routes());
    this.app.use('/api/users', new UserController().getRouter());

    // Docs
    this.app.use('/api-docs/swagger', express.static('server/assets/swagger') );
    this.app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
  }
}

function expressApp(): express.Application {
  return new App().app;
}

export default expressApp;
