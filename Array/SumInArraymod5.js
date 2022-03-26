function SumInArraymod5()
{
    let set = []
    for(let i =0;i<=100;i++)
    {
        if(i%5) continue
        else set.push(i)
    }
    let sum = 0
    for(let j =0;j<set.length;j++)
    {
        sum = sum + set[j]
    }
    return sum
}
console.log(SumInArraymod5())