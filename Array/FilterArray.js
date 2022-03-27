function FilterArray(set = []){
    let set2 = []
    let max = set[0].length
    for ( let i = 0; i<set.length;i++){
        if (max < set[i].length) max = set[i].length
        else continue
    }
    for (let j = 0; j <set.length;j++)
    {
        if(set[j].length==max){
            set2.push(set[j])
        }
    }
    return set2
}
console.log(FilterArray(['aba', 'aa', 'ad', 'c', 'vcd']))