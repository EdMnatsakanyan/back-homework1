function unique(arr){
    if(!Array.isArray(arr)){
        throw new Error("only arrays")
    }
    let temp=new Set(arr)
    return [...temp]
}

function flatten(arr,temp=[]){
    if(!Array.isArray(arr)){
        throw new Error("only arrays")
    }
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])=='object'){
            flatten(arr[i],temp)
        }else{
            temp.push(arr[i])
        }
    }
    return temp
}

function chunk(arr, size=1){
    if(!Array.isArray(arr)){
        throw new Error("only arrays")
    }

    let temp=[],i=0 
    while(i<arr.length){
        temp.push([...arr.slice(i,i+size)])
        i+=size
    }

    return temp
}


module.exports={unique,flatten,chunk}