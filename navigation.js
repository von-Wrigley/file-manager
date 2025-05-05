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
    const parentDir = path.dirname(workDirectory)

 
      console.log(workDirectory)
    try {

     
        chdir(parentDir);
        // console.log(`New directory: ${cwd()}`);
//  console.log("root: ", parentDir)
 console.log("workDirectory: ", workDirectory)
        // currentPath(cwd())
      } catch (err) {
        console.error(`chdir: ${err}`);
      }
}

export default goUp