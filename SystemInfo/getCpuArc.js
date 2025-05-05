import process from 'node:process'
import currentPath from '../currentPath.js'
const getCPUArc= ()=> {

 try {
    currentPath(process.cwd())
    console.log(process.arch)
 } catch (error) {
    console.log('Operation failed')
 }


 
}

export default getCPUArc