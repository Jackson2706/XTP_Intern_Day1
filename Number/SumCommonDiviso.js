function SumCommonDiviso(a)
{
    let sum =0
    for(let i = 1; i<=a;i++)
    {
        if(a%i==0)
        {
            sum = sum + i
        }
    }
    return sum
}
console.log(SumCommonDiviso(24))