const PRESENT = 1;
const PART_TIME = 2;

const WORKING_HOUR = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_HOUR = 40;
const MAX_WORKING_DAY = 20;

var totalWorkingHour = 0;
var day = 0;
let empDailyWage = new Array();
let empWorkingHrMap = new Map();

function getWorkingHour(isPresent) {
    switch (isPresent) {
        case PRESENT:
            empHr = WORKING_HOUR;
            break;

        case PART_TIME:
            empHr = WORKING_HOUR / 2;
            break;

        default:
            empHr = 0;
            break;
    }
    return empHr;
}

function calculateWage(wHour) {
    return wHour * WAGE_PER_HOUR;
}

let empObjArr = new Array();

while (totalWorkingHour < MAX_WORKING_HOUR && day < MAX_WORKING_DAY) {
    let isPresent;
    if (totalWorkingHour == (MAX_WORKING_HOUR - WORKING_HOUR / 2)) {
        isPresent = PART_TIME;
    } else {
        isPresent = Math.floor(Math.random() * 3);
    }
    let workingHour = getWorkingHour(isPresent);

    totalWorkingHour += workingHour;
    day++;
    let dailyWage = calculateWage(workingHour);
    empDailyWage.push(dailyWage);
    empWorkingHrMap.set(day, workingHour);

    let obj = {
        noOfDay: day,
        dailyWage: dailyWage,
        dailyHour: workingHour,
        toString() {
            return "Day : "+this.noOfDay+"\nDaily Hour : "+this.dailyHour+"\nDaily wage : "+this.dailyWage+"\n-----------------------------------------------------";
        }
    };

    empObjArr.push(obj);
}

console.log("UC10 print obj :" +empObjArr);

console.log("Total working Hour : " + totalWorkingHour + " Hours");
console.log("Total working Day : " + day + " Days");
console.log(empDailyWage);

let findTotal = (prevSum, currentDailyWage) => prevSum+currentDailyWage;

let totalSalary = empDailyWage.reduce(findTotal,0);

console.log("Total salary of month $"+totalSalary+" USD");

console.log(empWorkingHrMap);

let totalWorkingHr= Array.from(empWorkingHrMap.values()).reduce(findTotal,0);
console.log("Total working hour : "+totalWorkingHour);

let workingDays = new Array();
let partTimeDays = new Array();
let noWorkingDays = new Array();

empWorkingHrMap.forEach((v,k,m)=>{
    if(v==8) workingDays.push(k);
    else if(v==4) partTimeDays.push(k);
    else noWorkingDays.push(k);
});

console.log("Full day working :" +workingDays);
console.log("Part time working days : " +partTimeDays);
console.log("No working days : "+noWorkingDays);

let partTime = empObjArr.filter((obj)=>obj.dailyHour ==4).map(
    (dailyHrsAndEmpWage)=>{
        return dailyHrsAndEmpWage.toString();
    }
);

console.log(partTime);