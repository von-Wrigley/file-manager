import  zlib   from 'node:zlib'
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs';
  import { pipeline } from 'stream'
  import process from 'node:process'
const decompress = async (input) => {
    const x= input.replaceAll(' ', ',').split(',')
    
    
        const filePath =  x[1]
        const newfilePath =  x[2]
    
        console.log('You are currently in ' + process.cwd()) 
             pipeline(
                    createReadStream(filePath),
                    zlib.createBrotliDecompress(),
                    createWriteStream(newfilePath),
                    err => {
                        if(err){
                            console.log('Operation failed')
                        }
                     
                      
                    }
              )
}

export default decompress