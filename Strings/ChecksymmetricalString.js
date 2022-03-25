function ChecksymmertricalString(string)
{
    string = string.toUpperCase()
    string = string.replace(/ /g,"")
    let check = false
    let temp = string.split('')
    temp = temp.reverse().join("")
    if (string == temp2){
        check = true
    }
    return check
}
 console.log(ChecksymmertricalString("Race car"))
 console.log(ChecksymmertricalString("Hello world"))