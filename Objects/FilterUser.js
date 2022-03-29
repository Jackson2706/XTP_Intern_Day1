const user=[
    user1={
        name:"Trần Trung Dũng",
        age:20, 
        isStatus:true
    },
    user2={
        name:"Trần Minh Đức",
        age:26,
        isStatus: false
    },
    user3={
        name:"Nguyễn Thu Hiền",
        age: 30,
        isStatus:true
    },
    user4={
        name:"Hà Tuấn Hùng",
        age:25,
        isStatus:false
    }];
function filterUser(user){
    let result =[]
    let i
    for(i=0;i<user.length;i++)
    {
        if(user[i].age>25 && user[i].isStatus==true){
            result.push(user[i])
        }
    }
    return result
}
console.log(filterUser(user))