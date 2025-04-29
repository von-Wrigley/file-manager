import currentPath from "./currentPath"




const changeDir = ()=> {
    const workDirectory = process.cwd()

    currentPath(workDirectory)

}

export default changeDir