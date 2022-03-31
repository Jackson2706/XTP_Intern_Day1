function GetCUrrentDate(sp){
    let currentdate = new Date()
    let dd = currentdate.getDate() 
    let mm = currentdate.getMonth()+1
    let yyyy = currentdate.getFullYear()
    if(dd<10) dd ="0"+dd
    if(mm<10) mm ="0"+mm
    let result = dd+sp+mm+sp+yyyy
    return result
}
console.log(GetCUrrentDate("/"))