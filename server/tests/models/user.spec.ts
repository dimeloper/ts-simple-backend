import * as chai from 'chai';
import { mockgoose } from '../../config/database';
import UserModel, { IUser } from '../../models/user.model';

process.env.NODE_ENV = 'testing';

const expect = chai.expect;

describe('Models User', () => {
  let userObject: IUser;

  it('should insert new user', async () => {
    const user = new UserModel();
    user.email = 'test@example.com';
    user.password = 'myVeryStrongPassword';

    const res = await user.save();
    userObject = res;

    expect(res).to.be.an('object');
    expect(res.email).to.be.equal('test@example.com');
    expect(res.password).to.be.equal('myVeryStrongPassword');
  });

  // clean up db after tests
  after((done: Function) => {
    mockgoose.helper.reset().then(() => {
      done();
    });
  });
});
