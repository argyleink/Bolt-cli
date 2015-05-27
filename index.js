#! /usr/bin/env node

var shell       = require('shelljs')
	, asciify 		= require('asciify')
	, chalk 			= require('chalk')

	// non deps
  , userArgs    = process.argv.splice(2)
  , command     = userArgs[0] || 'new'
	, dir   			= userArgs[1] || '.'
  , custom_dir  = dir !== '.'
;

asciify('Bolt', {
	font: 'alligator',
	color: 'blue'
}, function(err, res){ 
	console.log(res);
	create();
});

function create() {
	console.log(
		chalk.blue('new project')
	);
	shell.exec('git clone https://github.com/argyleink/Bolt.git ' + dir);

	console.log('cleaning up');
	shell.exec('rm -rf '+ (custom_dir ? dir : '.') +'/.git');

	console.log(
		chalk.green('done')
	);

	console.log('run '+ chalk.red.bold('npm i') +' from the new project root');
}
