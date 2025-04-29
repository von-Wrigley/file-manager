import process from 'node:process';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import currentPath from './currentPath.js'
import os from 'node:os'
process.stdin.resume()
const rl = readline.createInterface({ input, output });



console.log("Welcome to the File Manager, "+ process.argv[process.argv.length-1] + '!' )
const workDirectory = process.cwd()
const hoeDirectory = os.homedir()

currentPath(hoeDirectory)

rl.on('SIGINT', ()=>{
    console.log("Thank you for using File Manager, " +process.argv[process.argv.length-1]+', goodbye!')
    process.exit(0)
});

rl.on('line', (input) => {
    if(input === '.exit')
        console.log("Thank you for using File Manager, " +process.argv[process.argv.length-1]+', goodbye!')
    process.exit(0)
  }); 