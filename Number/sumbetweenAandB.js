function sumbetweenAandB(a,b)
{
    let sum = 0
    let i = a + 1
    for(i;i<b;i++)
    {
        sum = sum + i 
    }
    return sum
}
console.log(sumbetweenAandB(1,10))