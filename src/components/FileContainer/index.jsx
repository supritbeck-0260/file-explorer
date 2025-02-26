import React, { useState } from 'react'
import files from '../../data/files.json'

import NodeRenderer from '../NodeRenderer'
import './style.css';
import { useFileHandler } from './useFileHandler';

const FileContainer = () => {
   const {data,fileHandler} = useFileHandler()

  return (
    <div className='file-container'>
      <h1>WindSurf</h1>
      <div className='main'>
       {data && <NodeRenderer  {...data} fileHandler={fileHandler}/>}
       </div>
    </div>
  )
}

export default FileContainer
