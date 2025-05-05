import crypto from 'crypto'
import fs from 'fs';
import process from 'node:process'
const calculateHash =  (input) => {
  const trimmedInput = input.slice(4).trim()
  const str = fs.createReadStream(trimmedInput)

           
        str.on('data', data => {
            const hash = crypto.createHash('sha256')
            hash.update(data)
            console.log('You are currently in ' + process.cwd()) 
            console.log(hash.digest('hex')) 
           })
        
           str.on("error", err => { 
            console.log('Operation failed'); 
        })

  
   
};


export default calculateHash