import { join } from 'path';
import { fileURLToPath } from "node:url";
import { access, unlink, constants } from 'fs/promises';

const remove = async (input) => {
    const x = input.slice(2).trim()
  
try {

    await access(x, constants.F_OK)
    await unlink(x)
    
} catch (error) {
   console.log('Operation failed')
}



};

export default remove