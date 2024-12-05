function reverse(string){
    if(typeof(string)!=='string'){
        throw new Error("Input must be string")
    }
    let temp=""
    for(let i=string.length-1;i>=0;i--){
        temp+=string[i]
    }
    return temp
}

function capitalize(string){
    if(typeof(string)!=='string'){
        throw new Error("Input must be string")
    }
    return string[0].toUpperCase()+string.slice(1)
}

function truncate(string, length){
    if(typeof(string)!=='string'){
        throw new Error("Input must be string")
    }
    let temp=''
    for(let i=0;i<length;i++){
        temp+=(string[i] ?? '.')
    }
    return temp
}

module.exports={reverse,capitalize,truncate}

