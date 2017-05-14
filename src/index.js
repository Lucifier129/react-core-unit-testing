import ReactLite from 'react-lite'
import Preact from 'preact-compat'
import Inferno from 'inferno-compat'
import React from 'react';

const env = process.env.TEST_ENV;

let testObj = React;

switch (env) {
  case 'react-lite':
    testObj = ReactLite;
    break;
  case 'preact':
    testObj = Preact;
    break;
  case 'inferno':
    testObj = Inferno;
    break;
  default:
}


export default testObj;