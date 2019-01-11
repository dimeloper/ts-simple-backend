# Express API built with Typescript

This repo is a simple express API which can be used as a starter project for building your own backend, based on Typescript.

## Starting the dev server

First you have to install the necessary dependencies.

```yarn install```

Then you can start the development server.

```yarn start:dev```

We are using Nodemon to watch for changes in the ts files and restart the server once we detect a change.

## Running unit tests

The project contains mocha unit tests for the models and the controllers. When running the unit tests and during development the mongoDB is mocked by mockgoose.

```yarn test```

Or you can inspect them in a browser window by running:

```yarn:test:inspect```

and accessing chrome://inspect on a chrome browser - a websocket connection will be available

## Linting files

I am have used my own favorite linting rules but feel free to adjust them by touching the tslint.json file.

```yarn tslint```

## Connecting to a prod database

You can configure your own prod database by changing the value for MONGODB_CONNECTION_URL in config/database.ts

## Running the server in production

Linting, testing and building the server:

```yarn prod```

Starting the production server:

```yarn start```

# For any questions, suggestions, or feature requests

[Please file an issue](https://github.com/dkiriakakis/dkiriakakis/ts-simple-backend/issues)!

Or get in touch with me:
- [Kiriakakis.com](https://kiriakakis.com)
- [Instagram Profile](https://instagram.com/dimitris.kiriakakis)

## License

License under the MIT License (MIT)

Copyright © 2018 [Dimitris Kiriakakis](http://www.kiriakakis.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.