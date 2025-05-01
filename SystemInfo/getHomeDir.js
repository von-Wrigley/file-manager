import os from 'node:os'


const getHomedir = ()=> {
   console.log(os.homedir())
}

export default getHomedir