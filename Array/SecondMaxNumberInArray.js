function SecondMaxNumberInArray(set=[]){
    set.sort(function(a,b){
        if(a>b) return 1
        if(a<b) return -1
        return 0
    })
    return set[set.length-2]
}
console.log(SecondMaxNumberInArray([2,5,8,54,78,96,5,2,1]))