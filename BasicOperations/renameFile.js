import { access } from 'node:fs';
import fs from 'fs/promises';


const rename = async (input) => {

const x = input.replaceAll(' ', ',').split(',')
const wrongPath = x[1]
const properPath = x[2]

    
     access(wrongPath || properPath, fs.constants.F_OK, err =>{
       if(err){
       
        throw new Error('Operation failed')
       }
      
try{   fs.rename(wrongPath, properPath);
    }
    catch(err){
        
        throw new Error('Operation failed')
    }
       
        
    })


 
   
    
};

 export default rename