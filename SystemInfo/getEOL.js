import os from 'node:os'
import process from 'node:process'
import currentPath from '../currentPath.js'
const getEOL = ()=> {

try {
    currentPath(process.cwd())
    console.log(JSON.stringify(os.EOL)); 
} catch (error) {
    console.log('Operation failed')
}


   
}

export default getEOL