function ValueExportObject(object_){
    let result= Object.values(object_)
    return result
}
const user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@xtp.vn'
}
console.log(ValueExportObject(user))