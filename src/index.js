import ReactLite from 'react-lite'
import Preact from 'preact-compat'
import Inferno from 'inferno-compat'
import React from 'react';
import ReactDOM from 'react-dom'

const env = process.env.TEST_ENV;

let testObj = {...React, ...ReactDOM};

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