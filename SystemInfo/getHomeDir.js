import os from 'node:os'
import currentPath from '../currentPath.js'
import process from 'node:process'

const getHomedir = ()=> {

    try {
      currentPath(process.cwd())
      console.log(os.homedir())
    } catch (error) {
       console.log('Operation failed')
    }

  
}

export default getHomedir