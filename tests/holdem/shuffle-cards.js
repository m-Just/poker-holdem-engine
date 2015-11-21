
'use strict';

const sut = require('../../holdem/shuffle-cards');

const tape = require('tape');
const chalk = require('chalk');
const sinon = require('sinon');

tape('shuffle', t => t.end());

tape('shuffle produces random sorted cards\' deck', function(t){

  const cardsA = sut();
  const cardsB = sut();

  t.notDeepEqual(cardsA, cardsB, 'Random');

  t.end();

});