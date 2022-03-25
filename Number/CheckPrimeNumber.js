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
console.log(CheckPrimeNumber(3))