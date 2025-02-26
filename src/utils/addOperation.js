
export const addFileAndUpdate = (node,id,name,isFolder)=>{
    if(!node) return node

    if(node.id === id){
        return ({
            ...node,
            children: [...node?.children, {
                id: Date.now().toString(),
                name,
                isFolder,
                children: []
            }]
        })
    }
    if(node.children?.length){
     node.children = node.children.map(item=> {
            const newvalue = addFileAndUpdate(item,id,name,isFolder)
            return newvalue
        })
    }

    return {...node}
}
