function GetdaysInMonth(mm,yyyy){
    let days = 0 
    if(yyyy % 4 == 0 && yyyy%100!=0 && yyyy%400==0){
        switch(mm){
            case 1 : days = 31; break;
            case 2 : days = 29; break;
            case 3 : days = 31; break;
            case 5 : days = 31; break;
            case 7 : days = 31; break;
            case 8 : days = 31; break;
            case 10 : days = 31; break;
            case 12 : days = 31; break;
            default : days = 30; break;
        }
    }
    else{
        switch(mm){
            case 1 : days = 31; break;
            case 2 : days = 29; break;
            case 3 : days = 31; break;
            case 5 : days = 31; break;
            case 7 : days = 31; break;
            case 8 : days = 31; break;
            case 10 : days = 31; break;
            case 12 : days = 31; break;
            default : days = 30; break;
        }
    }
    return days
}
console.log(GetdaysInMonth(3,2020))