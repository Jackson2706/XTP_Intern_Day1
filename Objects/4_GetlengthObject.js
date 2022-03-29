function getlengthobject(object_){
    let count = 0
    for(let key in object_){
        count = count +1
    }
    return count
}
const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@xtp.vn'
    };
console.log(getlengthobject(user))
    