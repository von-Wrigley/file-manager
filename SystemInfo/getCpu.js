import os from 'node:os'


const getCpu = ()=> {
    console.log( "Amount of CPUS: " + os.cpus().length)
   const allCPU = os.cpus()

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
    
}

export default getCpu