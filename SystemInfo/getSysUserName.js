import os from 'node:os'


const getUserInfo = ()=> {
    console.log((os.userInfo())); 
}

export default getUserInfo