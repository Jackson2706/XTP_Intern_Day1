function CheckPrimeNumber(a)
{
    let check = true
    if(a<2) {
        check = false
    }
    else
    for(let i = 2; i<a;i++)
    {
        if(a%i==0)
        {
            check = false
            break
        }
    }
    return check
}
function SumPrimeNumber(a)
{
    let sum=0
    for(let i = 1;i<=a;i++)
    {
        if(CheckPrimeNumber(i))
        {
            if(a%i==0)
            {
                sum = sum + i
            }
            else continue
        }
        else continue
    }
    return sum
}
console.log(SumPrimeNumber(15))