function Similarity(set=[], set2=[]){
    let result=[]
    for(let i=0;i<set.length;i++){
        for(let j=0;j<set2.length;j++){
            if(set[i]==set2[j]){
                result.push(set[i])
                continue
            }
            else continue
        }
    }
    return result
}
console.log(Similarity([1, 2, 3], [1, 2, 4]))