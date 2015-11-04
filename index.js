#! /usr/bin/env node
'use strict'

let shell       = require('shelljs')
  , asciify     = require('asciify')
  , chalk       = require('chalk')
  , bolt        = require('./package.json')

  // non deps
  , asciiFont   = 'speed'
  , userArgs    = process.argv.splice(2)
  , command     = userArgs[0]
  , dir         = userArgs[1] || '.'
  , custom_dir  = dir !== '.'
;

// Command Route
switch(command) {
  case '-v':
    console.log(bolt.version)
    break
  case 'new':
    newProject()
    break
  default:
    run()
}

function newProject() {
  asciify('Bolt', {
    font:   asciiFont,
    color:  'cyan'
  }, (err, res)=> {
    console.log(res)
    create()
  })

  function create() {
    // git clone
    shell.exec(`git clone https://github.com/argyleink/Bolt.git ${dir}`)

    // delete cruft
    console.log('Cleaning up..')
    shell.exec(`rm -rf ${(custom_dir ? dir : '.')}/.git`)

    // complete
    console.log(
      chalk.green('done!')
    )

    // prompt
    let command = chalk.cyan(`cd ${dir} && npm i && bower i && grunt`)
    console.log(`Next: run ${command} and you're ready to hack optimally`)
  }
}

function run() {
  shell.exec('grunt')
}
