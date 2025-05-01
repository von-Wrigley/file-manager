import process from 'node:process'

const getCPUArc= ()=> {
    console.log(process.arch)
}

export default getCPUArc