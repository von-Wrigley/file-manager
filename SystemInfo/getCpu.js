import os from 'node:os'
import currentPath from '../currentPath.js'
import process from 'node:process'

const getCpu = ()=> {
   
   const allCPU = os.cpus()

   try {
    currentPath(process.cwd())
    console.log( "Amount of CPUS: " + os.cpus().length)
    allCPU.map(x=>  {
        const  speed =  x.speed/1000
        console.log(
            {
                model: x.model,
                clockRate: speed + ' GHz',
                times: x.times
        
        
              }
    
        )  
       })
    
   } catch (error) {
     console.log('Operation failed')
   }

  
    
}

export default getCpu