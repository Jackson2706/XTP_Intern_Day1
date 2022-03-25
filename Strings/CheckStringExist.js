function CheckStringExist(string1,string2)
{
    let check = string1.includes(string2);
    return check;
}

console.log(CheckStringExist("I love you","love"))
console.log(CheckStringExist("I love you","hate"))