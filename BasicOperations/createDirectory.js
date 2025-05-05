import fs from 'node:fs/promises'
import process from 'node:process';
const createDir = async(input)=> {
    const name = input.slice(5).trim()

    try {
      fs.mkdir(name)
      console.log('You are currently in ' + process.cwd())
    } catch (error) {
        console.error('Operation failed');
    }

}

export default createDir