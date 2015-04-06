#!/usr/bin/env node
'use strict';
var path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: desktop-background <path-to-image>');
  process.exit(1);
}

var desktopBackground = require('./');

desktopBackground( path.resolve(process.argv[2]) );
