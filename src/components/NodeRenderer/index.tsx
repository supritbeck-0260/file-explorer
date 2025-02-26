import React, { useState } from 'react'
import './style.css';
import { useNodeOperation } from './useNodeOperation';


import { FaRegFolder } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiFolderAdd } from "react-icons/ti";
import { RiFileAddFill } from "react-icons/ri";

const NodeRenderer = (props) => {
  const {id,name,children,isFolder,fileHandler} = props
  console.log({props})

   const {
    handlers : {
    addFolderHandler,addFileHandler,updateHandler, deleteHandler
   },
   state: {
    isExpanded, setIsExpanded
   }} = useNodeOperation(props)

  return (
    <div key={id} className='list-content'>
     <div className='list-name-icon-expand'>
        <span className='list-expand' onClick={()=>setIsExpanded(prev=>!prev)}>{isFolder? isExpanded? <FaFolderOpen/>:<FaRegFolder/>: ''}</span> 
        <span className='list-name'  onClick={updateHandler}>{name}</span> 
        {isFolder && <span className='list-add' onClick={addFolderHandler}> <TiFolderAdd /> </span>}
        {isFolder && <span className='list-add' onClick={addFileHandler}> <RiFileAddFill /> </span>}
        <span className='list-delete' onClick={deleteHandler}> <MdDelete /> </span>
    </div>  
     <div className='list-child'>{Boolean(children?.length && isExpanded) && children.map(item=> <NodeRenderer key={item.id} {...item} fileHandler={fileHandler}/>)}</div>
   </div>
  )
}

export default NodeRenderer
