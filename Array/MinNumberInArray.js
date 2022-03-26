function MinNumberInArray(set=[])
{
    set.sort(function(a,b){
        if(a>b) return 1
        if(a<b) return -1
        return 0
    })
    return set[0]
}
console.log(MinNumberInArray([8,5,7,6,78]))