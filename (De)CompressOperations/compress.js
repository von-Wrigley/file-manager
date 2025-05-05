import  zlib   from 'node:zlib'
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs';
  import { pipeline } from 'stream'
import currentPath from '../currentPath.js';
import process from 'node:process';
import path from 'node:path'

const compress = async (input) => {
const x= input.replaceAll(' ', ',').split(',')


    const filePath =  x[1]
    const newfilePath =  x[2]


    //   const pathToNewDir1 = path.parse(filePath).base  
    //   const pathToNewDir2 = path.join(pathToNewDir, pathToNewDir1)


    currentPath(process.cwd())
         pipeline(
                createReadStream(filePath),
                zlib.createBrotliCompress(),
                createWriteStream(newfilePath),
                err => {
                    if(err){
                        console.log('Operation failed')
                    }
                 
                  
                }
          )


};

export default compress