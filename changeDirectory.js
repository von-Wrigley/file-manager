import currentPath from "./currentPath.js"
import { chdir, cwd } from 'node:process';


const changeDir = (input)=> {
    const workDirectory = process.cwd()

 const x = input.slice(2)
console.log(typeof x)


    try {
        chdir(x.trim()  );
        console.log(`New directory: ${cwd()}`);
        currentPath(x)
      } catch (err) {
        console.error(`chdiredwe: ${err}`);
      }

}

export default changeDir