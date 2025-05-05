import os from 'node:os'


const getUserInfo = ()=> {


 try {
    console.log((os.userInfo())); 
 } catch (error) {
    console.log('Operation failed')
 }


   
}

export default getUserInfo