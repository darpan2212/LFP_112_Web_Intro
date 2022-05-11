const PRESENT = 1;
const PART_TIME = 2;

const WORKING_HOUR = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_HOUR = 40;
const MAX_WORKING_DAY = 20;

var totalWorkingHour = 0;
var day = 0;
let empDailyWage = new Array();
let empWageMap = new Map();

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
    empWageMap.set(day, dailyWage);
}

console.log("Total working Hour : " + totalWorkingHour + " Hours");
console.log("Total working Day : " + day + " Days");
console.log(empDailyWage);

let totalSalary = 0;

function sumOfArray(dailyWage) {
    totalSalary += dailyWage;
}

empDailyWage.forEach(sumOfArray);

console.log("Total salary : $" + totalSalary + " USD");

// function sumWithReduce(totalWage, dailyWage) {

// }

console.log("---------------------------------------");

function reduceSum(prev, current) {
    return prev + current;
}
let totalS = empDailyWage.reduce(reduceSum);
console.log("Total Salary with reduce : " + totalS);

console.log("---------------------------------------");

let dailyCounter = 0;

function mapWithDay(dailyWage) {
    dailyCounter++;
    return dailyCounter + "=>" + dailyWage;
}

let mapData = empDailyWage.map(mapWithDay);
console.log(mapData);

console.log("---------------------------------------");

function filterData(dailyWage) {
    return dailyWage.includes("160");
}

let filterArray = mapData.filter(filterData);

console.log(filterArray);

let firstFullTimeWage = mapData.find((wage) => {
    return wage.includes("160");
})
console.log(firstFullTimeWage);

let every = mapData.every((wage) => {
    return wage.includes("160");
})
console.log("Is Every wage full time? : " + every);

let some = mapData.some((wage) => {
    return wage.includes("160");
})
console.log("Is Some wage full time? : " + some);

let totalWorkingDay = empDailyWage.reduce((numOfDay, dailyWage) => {
    if (dailyWage > 0) {
        return numOfDay + 1;
    }
    return numOfDay;
}, 0);
console.log("Total working day : " + totalWorkingDay);

console.log("---------------------------");

console.log(empWageMap);

let workingDayFromMap = Array.from(empWageMap.values()).reduce((d, dW) => {
    if (dW > 0) {
        return d + 1;
    }
    return d;
}, 0);
console.log("Working day from map : " + workingDayFromMap);