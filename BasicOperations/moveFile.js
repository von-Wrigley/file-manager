

import { createReadStream, createWriteStream } from 'node:fs'
import fs from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'


const moveFile = async (input)=> {
    const name = input.replaceAll(' ', ',').split(',')

    const pathToFile = name[1]
    const pathToNewDir = name[2]

  
  await pipeline(
        createReadStream(pathToFile),
        createWriteStream(pathToNewDir)
  )
  await fs.unlink(pathToFile)

console.log(pathToFile)
console.log(pathToNewDir)
}

export default moveFile