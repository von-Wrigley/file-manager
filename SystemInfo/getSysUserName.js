import os from 'node:os'
import currentPath from '../currentPath.js'
import process from 'node:process'

const getUserInfo = ()=> {


 try {
   currentPath(process.cwd())
    console.log((os.userInfo())); 
 } catch (error) {
    console.log('Operation failed')
 }


   
}

export default getUserInfo