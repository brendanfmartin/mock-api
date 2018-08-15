const expect = require('chai').expect;
const apiConfig = require('../../config/api');

describe('sample', function () {
  it('outputs something', function () {
    expect(apiConfig.sample).to.deep.equal({
      'sample': {
        'key': 'value'
      }
    });
  });

  it('outputs something', function () {
    expect(apiConfig.sample).not.to.deep.equal({
      'sample': {
        'key': false
      }
    });
  });
});