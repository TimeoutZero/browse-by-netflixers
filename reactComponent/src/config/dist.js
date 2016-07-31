'use strict';

import baseConfig from './base';
let path = require('path');

let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  entry: path.join(__dirname, '../src/component.entry'),
  output: {
    filename: 'CategoryBrowse.component.js'
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
