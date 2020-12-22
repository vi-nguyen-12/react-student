export const filter=(tagList,val)=>{
    if(val===''){return true}
    for (let i of tagList){
        if (i.startsWith(val.toLowerCase())){return true}
    }
    return false
}
