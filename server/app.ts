import bodyParser from 'body-parser';
import express from 'express';
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
    console.log('configure app');
    // use json form parser middlware
    this.app.use(bodyParser.json());

    // use query string parser middlware
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );
  }

  /**
   * Create router
   *
   * @class Server
   * @method api
   */
  public routes(): void {
    this.app.use('/health', HealthController.routes());
    this.app.use('/api/users', UserController.routes());
  }
}

function expressApp(): express.Application {
  return new App().app;
}

export default expressApp;
