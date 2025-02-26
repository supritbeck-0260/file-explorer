import { useState } from "react"
import files from '../../data/files.json'
import { addFileAndUpdate } from '../../utils/addOperation';
import { deleteAndUpdate } from '../../utils/deleteOperation';
import { updateFile } from '../../utils/updateOperation';
import { OPERATIONS } from "../../constant";

export const useFileHandler = ()=>{
    const [data,setData] = useState(files)

    const fileHandler = ({type,id,name,isFolder})=>{
        switch(type){
            case OPERATIONS.ADD:{
                const updatedFiles = addFileAndUpdate(data,id,name,isFolder)
                setData(updatedFiles)
                break;
            }
            case  OPERATIONS.DELETE:{
                const updatedFiles = deleteAndUpdate(data,id)
                setData(updatedFiles)
                break;
            }
            case  OPERATIONS.UPDATE:{
                const updatedFiles = updateFile(data,id,name)
                setData(updatedFiles)
                break;
            }
            default:
                break
        }
    
       }

       return { fileHandler, data }
}