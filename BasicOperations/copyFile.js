
import process from 'node:process';
import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import path from 'node:path'

const copyFile = async (input)=> {
    const name = input.replaceAll(' ', ',').split(',')
 
    const pathToFile = name[1]
    const pathToNewDir = name[2]

     const pathToNewDir1 = path.parse(pathToFile).base

     const pathToNewDir2 = path.join(pathToNewDir, pathToNewDir1)
 try {
    
    
  await pipeline(
    createReadStream(pathToFile),
    createWriteStream(pathToNewDir2)
)
console.log('You are currently in ' + process.cwd())
    
 } catch (error) {
    console.log('Error: ', error)
 }



}

export default copyFile