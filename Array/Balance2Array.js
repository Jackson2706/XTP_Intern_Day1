function Balance2Array(set = []){
    let set2 = []
    for(let i = 0; i< set.length; i++)
    {
        set2.push(set[i]%2)
    }
    return set2
}
console.log(Balance2Array([9,5,8,7,4,1,2,4,6,65]))