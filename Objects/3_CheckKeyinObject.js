user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@xtp.vn'
    };
function CheckKeyinObject(key){
    let check = key in user
    return check 
}
console.log(CheckKeyinObject("name"))