import os from 'node:os'


const getHomedir = ()=> {

    try {
      console.log(os.homedir())
    } catch (error) {
       console.log('Operation failed')
    }

  
}

export default getHomedir