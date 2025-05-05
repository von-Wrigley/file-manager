import currentPath from "./currentPath.js"
import { chdir, cwd } from 'node:process';


const changeDir = (input)=> {
    const workDirectory = process.cwd()

 const x = input.slice(2)



    try {
        chdir(x.trim()  );
        console.log(`You are currently in path ${cwd()}`);
      } catch (err) {
        console.error(`chdiredwe: ${err}`);
      }

}

export default changeDir