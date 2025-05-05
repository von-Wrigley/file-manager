import process from 'node:process';
import fs from 'node:fs/promises'
import path from 'node:path';


const readFile = async (input)=> {
    const name = input.slice(3).trim()
    
    const workDirectory = process.cwd()
    const nameDir  = path.join(workDirectory, name)
 
    try {
        const currentFile = await fs.readFile(name,  { encoding: 'utf8' })
        console.log('You are currently in ' + process.cwd())
        console.log( currentFile)

        
    } catch (error) {
        console.error("Operation failed")
        
    }
}

export default readFile