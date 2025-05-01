import crypto from 'crypto'
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const calculateHash =  (input) => {
const trimmedInput = input.slice(4).trim()
  

//    const dirname = fileURLToPath(new URL('.', import.meta.url));
//    const filePath = join(dirname,);
    const str = fs.createReadStream(trimmedInput)

   str.on('data', data => {
    const hash = crypto.createHash('sha256')
    hash.update(data)
    console.log(hash.digest('hex')) 
   })
   
};


export default calculateHash