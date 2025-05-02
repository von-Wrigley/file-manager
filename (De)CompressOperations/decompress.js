import  zlib   from 'node:zlib'
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs';
  import { pipeline } from 'stream'

const decompress = async (input) => {
    const x= input.replaceAll(' ', ',').split(',')
    
    
        const filePath =  x[1]
        const newfilePath =  x[2]
    
    
             pipeline(
                    createReadStream(filePath),
                    zlib.createBrotliDecompress(),
                    createWriteStream(newfilePath),
                    err => {
                        if(err){
                            console.log('Error: ', err)
                        }
                      else  console.log('success')
                      
                    }
              )
}

export default decompress