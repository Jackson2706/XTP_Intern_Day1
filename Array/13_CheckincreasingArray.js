function CheckIncreasingArray(set=[]){
    let check = true
    let i,j
    for(i=0;i<set.length;i++){
        for(j=i+1;j<set.length;j++){
            if(set[i]>set[j]){
                check=false
                return check
            }
        }
    }
    return check
}
console.log(CheckIncreasingArray([1,2,3,4,6,5,7,8,9]))