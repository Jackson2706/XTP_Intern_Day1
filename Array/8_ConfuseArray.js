function ConfuseArray(set=[]){
    return set.sort(()=> Math.random() - 0.5)
}
console.log(ConfuseArray([1,2,3,4,5,6,7,8,9]))
