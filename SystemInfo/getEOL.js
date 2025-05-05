import os from 'node:os'


const getEOL = ()=> {

try {
    console.log(JSON.stringify(os.EOL)); 
} catch (error) {
    console.log('Operation failed')
}


   
}

export default getEOL