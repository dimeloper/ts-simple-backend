# Express API built with Typescript

This repo is a simple express API which can be used as a starter project for building your own backend, based on Typescript.

### Starting the dev server

- yarn install
- yarn tsc:watch
- open another terminal window
- yarn start:dev

So in other words, we are watching for typescript changes and recompiling them into the build folder while nodemon watches for changes into the build folder and redeploys the server.

The nodemon watcher can't be used standalone for now due to https://github.com/remy/nodemon/issues/1025

### Linting your files

- yarn tslint
