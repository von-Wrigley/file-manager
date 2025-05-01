import process from 'node:process';
import fs from 'node:fs/promises'
import path from 'node:path';

const createFile = async (input)=> {
    const name = input.slice(3).trim()
    const workDirectory = process.cwd()
    const nameDir  = path.join(workDirectory, name)
    console.log(nameDir)
    try {
                await  fs.writeFile(nameDir, '', { flag: 'wx' })

        
    } catch (error) {
        console.error(error)
        
    }

        

      
}

export default createFile