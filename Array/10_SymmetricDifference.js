function SymmetricDifference(set=[], set2=[]){
    let result = []
    let i,j
    for(i =0;i<set.length;i++){
        if(set2.indexOf(set[i])!=-1){
            continue
        }else{
            result.push(set[i])
        }
    }
    for(j=0;j<set2.length;j++){
        if(set.indexOf(set2[j])!=-1){
            continue
        }else{
            result.push(set2[j])
        }
    }
    return result
}
console.log(SymmetricDifference([1,2,3],[1,2,4]))
   