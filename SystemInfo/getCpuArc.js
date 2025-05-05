import process from 'node:process'

const getCPUArc= ()=> {

 try {
    console.log(process.arch)
 } catch (error) {
    console.log('Operation failed')
 }


 
}

export default getCPUArc