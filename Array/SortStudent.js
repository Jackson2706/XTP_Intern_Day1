function SortStudent(set=[]){
    set.sort(function(a,b){
        if(a>b) return -1
        if(a<b) return 1
        return 0
    })
    return set
}
console.log(SortStudent(["Nam","Hoa","Tuấn"]))
