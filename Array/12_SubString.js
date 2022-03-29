function Sub_string(set=""){
    let i,j,result=[]
    for(i=0;i<set.length;i++){
        for(j=i+1;j<set.length+1;j++)
        {
            result.push(set.slice(i,j))
        }
    }
    return result
}
console.log(Sub_string("dog"))