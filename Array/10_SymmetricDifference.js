function Similarity(set1=[], set3=[]){
    let result1=[]
    for(let i=0;i<set1.length;i++){
        for(let j=0;j<set3.length;j++){
            if(set1[i]==set3[j]){
                result1.push(set1[i])
            }
            else continue
        }
    }
    return result1
}
function symmetricDifference(set=[],set2=[]){
    let check = Similarity(set,set2)
    let result2 = []
    let k = 0
    return result2
}
console.log(symmetricDifference([1,2,3],[1,2,4]))