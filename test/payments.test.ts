import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import App from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /v1/payments', () => {
  it('should response with json array', () => {
    return chai.request(App).get('/v1/payments')
    .then((res) => {
      expect(res).to.be.json;
      expect(res.status).to.be.eql(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length(1);
    });
  });

  it('should include payment #10101', () => {
    return chai.request(App).get('/v1/payments')
    .then((res) => {
      const payment = res.body.find(payment => payment.id === 10101);
      expect(payment).to.exist;
      expect(payment).to.have.all.keys([
        'id',
        'card',
        'installments',
        'metadata',
      ]);
    });
  });
});
