import {useState} from 'react';
import { OPERATIONS } from '../../constant';

export const useNodeOperation = ({fileHandler,name,id})=>{
  const [isExpanded,setIsExpanded] = useState(false)

    const addFolderHandler = ()=>{
            const fileName = prompt('Enter Folder Name')
            if(!fileName) return
            fileHandler({type:OPERATIONS.ADD,id,name:fileName.trim(),isFolder:true})
            setIsExpanded(true)
        }

    const deleteHandler = ()=>{
        fileHandler({type:OPERATIONS.DELETE,id})
      }

    const updateHandler = ()=>{
        const updatedFile = prompt("Enter new Name", name)
        if(!updatedFile) {
          alert('Name can not be empty')
          return
        }
        if(updatedFile === name) return
    
        fileHandler({type:OPERATIONS.UPDATE,id,name: updatedFile.trim()})
      }

    const addFileHandler = ()=>{
        const fileName = prompt('Enter File Name')
        if(!fileName) return
        fileHandler({type:OPERATIONS.ADD,id,name: fileName.trim(),isFolder:false})
        setIsExpanded(true)
      }
      
      
  return {
        handlers: {
          addFolderHandler,
          deleteHandler,
          updateHandler,
          addFileHandler,
        },
        state: {
         setIsExpanded,
         isExpanded,
        }
      }
}