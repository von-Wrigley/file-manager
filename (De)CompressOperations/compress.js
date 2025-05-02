import  zlib   from 'node:zlib'
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs';
  import { pipeline } from 'stream'


const compress = async (input) => {
const x= input.replaceAll(' ', ',').split(',')


    const filePath =  x[1]
    const newfilePath =  x[2]


     

         pipeline(
                createReadStream(filePath),
                zlib.createBrotliCompress(),
                createWriteStream(newfilePath),
                err => {
                    if(err){
                        console.log('Error: ', err)
                    }
                  else  console.log('success')
                  
                }
          )


};

export default compress