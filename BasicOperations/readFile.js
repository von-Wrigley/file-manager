import process from 'node:process';
import fs from 'node:fs/promises'
import path from 'node:path';

const readFile = async (input)=> {
    const name = input.slice(3).trim()
    
    const workDirectory = process.cwd()
    const nameDir  = path.join(workDirectory, name)
 console.log("Current name: "  + name)
    try {
        const currentFile = await fs.readFile(name,  { encoding: 'utf8' })
        console.log( "Current file: "  + currentFile)

        
    } catch (error) {
        console.error(error)
        
    }
}

export default readFile