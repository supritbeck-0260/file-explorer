export const deleteAndUpdate  = (node,id)=>{

    if(node.id == id) return null

    if(node.children?.length){
        node.children = node.children.map(child=> deleteAndUpdate(child,id))
        .filter(child => !!child)
    }

    return {...node}
   
}
