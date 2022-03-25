function RepeatStringwithntimes(string,n)
{
    string = string + " "
    let result = string.repeat(n)
    result = result.slice(0,result.length-1)
    result = result.replace(/ /g,"-")
    return result
}

console.log(RepeatStringwithntimes("a",5))