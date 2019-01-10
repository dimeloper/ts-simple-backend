process.env.NODE_ENV = 'testing';

import chai from 'chai';
import chaiHttp from 'chai-http';

import expressApp from '../../app';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Users Api', () => {

  it('should be able to create user', (done: Function): void => {
    chai.request(expressApp())
      .post('/api/users')
      .set('content-type', 'application/json')
      .send({
        email: 'Someone',
        password: '...'
      })
      .end((err: Error, res: any): void => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.email).to.be.equal('Someone');
        done();
      });
  });

  it('should be able to get users', (done: Function): void => {
    chai.request(expressApp())
      .get('/api/users')
      .end((err: Error, res: any): void => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.length).to.be.equal(1);
        done();
      });
  });
});
