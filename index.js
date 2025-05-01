import process from 'node:process';
import currentPath from './currentPath.js'
import os from 'node:os'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import goUp from './navigation.js';
import changeDir from './changeDirectory.js';
import ls from './listOfFiles.js';
import getEOL from './SystemInfo/getEOL.js';
import getCpu from './SystemInfo/getCpu.js';
import getHomedir from './SystemInfo/getHomeDir.js';
import getUserInfo from './SystemInfo/getSysUserName.js';
import getCPUArc from './SystemInfo/getCpuArc.js';
import calculateHash from './calcHash.js';




process.stdin.resume()
const rl = readline.createInterface({ input, output })



console.log("Welcome to the File Manager, "+ process.argv[process.argv.length-1] + '!' )
const workDirectory = process.cwd()
const hoeDirectory = os.homedir()

currentPath(hoeDirectory)

rl.on('SIGINT', ()=>{
    console.log("Thank you for using File Manager, " +process.argv[process.argv.length-1]+', goodbye!')
    process.exit(0)
});

rl.on('line', (input) => {
    if(input === '.exit'){
        console.log("Thank you for using File Manager, " +process.argv[process.argv.length-1]+', goodbye!')
        process.exit(0)
    }
    else if(input === 'up')
        goUp()
    else if(input.slice(0,2) === 'cd')
        changeDir(input)

    else if(input==='ls')
        ls()

    else if(input === 'os --EOL')
        getEOL()

    else if(input === 'os --cpus')
        getCpu()

    else if(input === 'os --homedir')
        getHomedir()

       else if(input === 'os --username')
        getUserInfo()

          else  if(input === 'os --architecture')
    getCPUArc()

          else if(input.slice(0,4) === 'hash')
            calculateHash(input)
        
  }




); 