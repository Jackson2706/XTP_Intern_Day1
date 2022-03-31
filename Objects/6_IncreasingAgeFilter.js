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
function IncreasingAgeFilter(object){
    let i,j
    let Temp
    for(i=0;i<object.length;i++){
        for(j=i+1;j<object.length;j++){
            if(object[i].age>object[j].age){
                Temp = object[i]
                object[i] = object[j]
                object[j] = Temp
            }
        }
    }
    return object
}
function viewUser(object=[]){
    let i
    for(i=0;i<object.length;i++){
        console.log((i+1)+".\nName : " + object[i].name +"\nAge : " + object[i].age+"\nIsStatus : " + object[i].isStatus)
    }
}
viewUser(IncreasingAgeFilter(user))