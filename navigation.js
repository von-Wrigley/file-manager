import currentPath from './currentPath.js'
import process from 'node:process';
import os from 'node:os'
import path from 'node:path';
import { chdir, cwd } from 'node:process';

const goUp = ()=> {
    const workDirectory = process.cwd()
    const hoeDirectory = os.homedir()

    const changeUp= workDirectory.split(path.sep)
    const x  = changeUp.slice(0, (changeUp.length-1)).join('\\')


 

    try {
        chdir(x);
        console.log(`New directory: ${cwd()}`);
        currentPath(x)
      } catch (err) {
        console.error(`chdir: ${err}`);
      }
}

export default goUp