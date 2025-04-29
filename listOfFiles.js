import { readdir } from 'fs/promises';


const ls =async ()=> {
    try {
        const x =  process.cwd()
          let data = await readdir(x, { withFileTypes: true });

     const typeList1 = []
     const typeList2 = []


     const fileList = []
     const dirList = []
 for (const y of data){
       if(y.isDirectory()){
        dirList.push(y.name)
        typeList1.push('directory')
       }
       else 
     {  fileList.push(y.name)
        typeList2.push('file')}

 }


 const fileList1 = fileList.sort((a, b) => a.value - b.value)
 const dirList1 = dirList.sort((a, b) => a.value - b.value)
 const arr = (dirList1).concat(fileList1)
 const arr2 = (typeList1).concat(typeList2)

const q = arr.map((item, index) => ({
    'name': item,
    'type': arr2[index]
  }))

       console.table(q)
      } catch (err) {
          console.log(err);}
      

}
export default ls