const day = "Thursday"
const date = 31
const month = 3
const year = 2022
function date_count(dd,mm,yyyy){
    let time = 0
    while(year>= yyyy){
        if(year == yyyy && month == mm){
            time =time + date - dd
            break
        }
        else{
            if(mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12){
                time =time + 31
            }
            if(mm==4||mm==6||mm==9||mm==11){
                time = time + 30
            }
            if(mm==2){
                if(yyyy%4==0 && yyyy%100!=0 && yyyy%400==0){
                    time=time + 29
                }else{
                    time=time + 28
                }
            }
            mm++
            if(mm==13){
                yyyy = yyyy+1
                mm=1
            }
        }
    }
    return time
}
function CheckWeekend(dd,mm,yyyy){
    let time = date_count(dd,mm,yyyy)
    let k = time%7
    let day=""
    let check = false
    switch(k){
        case 0 : day = "Thursday"; break;
        case 1 : day = "Wednesday"; break;
        case 2 : day = "Tuesday"; break;
        case 3 : day = "Monday"; break;
        case 4 : day = "Sunday"; break;
        case 5 : day = "Saturday"; break;
        case 6 : day = "Friday"; break;
    }
    if(day==="Saturday"||day==="Sunday")
    {
        check = true
        return check
    }
    return check
}
console.log(CheckWeekend(2,4,2022))