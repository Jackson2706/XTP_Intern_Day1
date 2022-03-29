function KeyExportObject(object_){
    let result=Object.keys(object_)
    return result
}
const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@xtp.vn'
}
console.log(KeyExportObject(user))