function RepeatStringwith_(string)
{
    string = string + " "
    let result = string.repeat(10)
    result = result.slice(0,result.length-1)
    result = result.replace(/ /g,"-")
    return result
}
console.log(RepeatStringwith_("a"))
