import { Mockgoose } from 'mockgoose-fix';

/* es6 import breaks mongoose */
/* tslint:disable */
const mongoose = require("mongoose");
/* tslint:enable */

(mongoose as any).Promise = global.Promise;

export const mockgoose = new Mockgoose(mongoose);

// Mock mongoDB on dev and test environments

if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'testing'
) {
  mockgoose.helper.setDbVersion('3.4.3');

  mockgoose.prepareStorage().then(
    (): void => {
      mongoose
        .connect(
          'mongodb://example.com:23400/TestingDB',
          { useNewUrlParser: true }
        )
        .then(() => {
          console.log('connected to database!');
        })
        .catch((error: any) => {
          console.log('Error connecting to database', error);
        });
    }
  );
} else {
  const databaseUrl: string =
    process.env.MONGO_HOSTS != null
      ? process.env.MONGO_HOSTS
      : 'swat-mongo.website.svc.cluster.local:27017';

  console.log('databaseUrl:', databaseUrl);

  const MONGODB_CONNECTION_URL: string = `mongodb://<username>:<password>@<databaseUrl>/<databaseName>`;

  mongoose.connect(
    MONGODB_CONNECTION_URL,
    { useNewUrlParser: true }
  );
}

export default mongoose;
