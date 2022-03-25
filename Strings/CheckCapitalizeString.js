function CheckCapitalizeString(string)
{
    let check = false
    let temp = string
    temp = temp.toUpperCase()
    if(string === temp)
    {
        check = true
    }
    return check
}
 console.log(CheckCapitalizeString("HELLO WORLD"))