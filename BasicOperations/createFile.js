import process from 'node:process';
import fs from 'node:fs/promises'
import path from 'node:path';

const createFile = async (input)=> {
    const name = input.slice(3).trim()
    const workDirectory = process.cwd()
    const nameDir  = path.join(workDirectory, name)
   
    try {
                await  fs.writeFile(nameDir, '', { flag: 'wx' })
                console.log('You are currently in ' + process.cwd())

        
    } catch (error) {
        console.error('Operation failed')
        
    }

        

      
}

export default createFile