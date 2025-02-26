export const updateFile  = (node,id,newName)=>{
    if(!node) return node
    if(node.id === id){
        return ({
            ...node,
            name: newName
        })
    }

    if(node.children?.length){
        node.children = node.children.map((child)=> updateFile(child,id,newName))
    }

    return {...node}

}