


const help= ()=> {
  const allComands = [
    ['up' , 'Go upper from current directory'], 
    ['cd path_to_directory' , 'Go to dedicated folder from current directory'], 
    ['ls' , 'List of all files and folders in current directory'], 
    ['add new_file_name' , 'Create empty file'], 
    ['mkdir new_directory_name' , 'Create new directory'], 
    ['rn path_to_file new_filename' , 'Rename file'], 
    ['cp path_to_file path_to_new_directory' , 'Copy file'], 
    ['cat path_to_file' , 'Read file'], 
    ['mv path_to_file path_to_new_directory' , 'Move file'], 
    ['rm path_to_file' , 'Delete file'], 
    ['os --EOL' , 'Get EOL'], 
    ['os --cpus' , 'Get host machine CPUs info'], 
    ['os --homedir' , 'Get home directory'], 
    ['os --username' , 'Get current system user name'], 
    ['os --architecture' , 'Get CPU architecture'], 
    ['hash path_to_file' , 'Calculate hash for file'], 
    ['compress path_to_file path_to_destination' , 'Compress file'], 
    ['decompress path_to_file path_to_destination' , 'Decompress file'], 



  ]

    console.table(allComands)

}
export default help