/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

const WordWidth = require('word-width');
const types = require('./types');

const toString = (v) => {
  if (v === null) return 'null';
  if (v === undefined) return 'undefined';
  if (types.isNumber(v) || types.isString(v) || types.isBool(v)) return `${v}`;
  if (types.isArray(v) || types.isArray(v)) return JSON.stringify(v);
  if (v.toString) return v.toString();
};

const wordWidth = s => WordWidth(toString(s));

module.exports = {
  wordWidth,
  toString,
};
