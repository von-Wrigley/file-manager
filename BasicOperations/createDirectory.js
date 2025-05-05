import fs from 'node:fs/promises'

const createDir = async(input)=> {
    const name = input.slice(5).trim()

    try {
      fs.mkdir(name)
    } catch (error) {
        console.error('Operation failed');
    }

}

export default createDir