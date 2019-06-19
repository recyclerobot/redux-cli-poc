#!/usr/bin/env node

// use ESM to allow ES6 modules
// https://github.com/standard-things/esm

require = require("esm")(module);
module.exports = require("./main.js").default;
