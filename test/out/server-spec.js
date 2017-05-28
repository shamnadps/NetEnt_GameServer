'use strict';

/* global describe, it */
var expect = require('chai').expect;
var util = require('../../out/server/api/util');

describe('getRandomIntInclusive()', function () {
  it('should be an integer in the range 0-5', function () {
    var result = util.getRandomIntInclusive();
    expect(result).to.be.a('number');
    expect(result).to.be.within(0, 5);
  });
});

describe('GameResults - Big Win', function () {
  it('Big Win when all the 3 numbers are equal', function () {
    var array = [1, 1, 1];
    var result = util.getGameResult(array);
    expect(result).to.equal('Big Win');
  });
});

describe('GameResults - Small Win', function () {
  it('Small Win when only 2 numbers are equal', function () {
    var array = [4, 2, 4];
    var result = util.getGameResult(array);
    expect(result).to.equal('Small Win');
  });
});

describe('GameResults - No Win', function () {
  it('No Win when none of the numbers are equal to each other', function () {
    var array = [1, 2, 3];
    var result = util.getGameResult(array);
    expect(result).to.equal('No Win');
  });
});

describe('Populate Result Array with 3 random numbers', function () {
  it('Array must contain 3 integer numbers', function () {
    var result = util.populateResultArray();
    expect(result).to.be.a('array');
    expect(result).to.have.length(3);
  });
});