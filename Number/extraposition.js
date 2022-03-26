function Extraposition(a)
{
    let result = 0
    let set = []
    let i = 0
    while(a>0){
        i = a%10
        a = a/10 - i/10
        set.push(i)
    }
    set.sort()
    result = set.join('')
    return result
}
console.log(Extraposition(9853152))
