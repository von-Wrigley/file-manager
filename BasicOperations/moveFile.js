

import { createReadStream, createWriteStream } from 'node:fs'
import fs from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import path from 'node:path'

const moveFile = async (input)=> {
  
  const name = input.replaceAll(' ', ',').split(',')
  const pathToFile = name[1].trim()
  const pathToNewDir = name[2].trim()


    const pathToNewDir1 = path.parse(pathToFile).base
  
    const pathToNewDir2 = path.join(pathToNewDir, pathToNewDir1)


 try {
  await pipeline(
    createReadStream(pathToFile),
    createWriteStream(pathToNewDir2)
)
await fs.unlink(pathToFile)

  
 } 
 
 catch (error) {
   console.log('Operation failed', error)
 }

}

export default moveFile