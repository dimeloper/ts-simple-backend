import express from 'express';
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
  }

  /**
   * Create router
   *
   * @class Server
   * @method api
   */
  public routes(): void {
    console.log('create router');
  }
}

function expressApp(): express.Application {
  return new App().app;
}

export default expressApp;
