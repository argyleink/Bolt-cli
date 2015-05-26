#! /usr/bin/env node
var shell = require("shelljs");
var userArgs = process.argv.splice(2);
var command = userArgs[0];

console.log(command);

shell.exec("echo Bolt project");
