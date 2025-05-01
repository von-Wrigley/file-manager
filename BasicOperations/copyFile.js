

import { createReadStream, createWriteStream } from 'node:fs'
import fs from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'


const copyFile = async (input)=> {
    const name = input.replaceAll(' ', ',').split(',')

    const pathToFile = name[1]
    const pathToNewDir = name[2]

  
 try {
    
    
  await pipeline(
    createReadStream(pathToFile),
    createWriteStream(pathToNewDir)
)
    
 } catch (error) {
    console.log('Error: ', error)
 }



}

export default copyFile