function CheckingDecreasingOddArray(set=[]){
    let check = true
    let i,j
    for(i=0;i<set.length;i++){
        for(j=i+1;j<set.length;j++){
            if(set[i]<set[j]){
                check=false
                return check
            }
        }
    }
    for(i=0;i<set.length;i++){
        if(set[i]%2){
            continue
        }else{
            check = false
            return check
        }
    }
    return check
}
console.log(CheckingDecreasingOddArray([9,7,5,3,1]))