"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/**
 * The server.
 *
 * @class ExpressApp
 */
class App {
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    static bootstrap() {
        return new App();
    }
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        // create expressjs application
        this.app = express_1.default();
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
    config() {
        console.log('configure app');
    }
    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    routes() {
        console.log('create router');
    }
}
exports.App = App;
function expressApp() {
    return new App().app;
}
exports.default = expressApp;
