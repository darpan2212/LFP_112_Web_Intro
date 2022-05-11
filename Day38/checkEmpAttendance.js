const PRESENT = 1;
const PART_TIME = 2;

const WORKING_HOUR = 8;
const WAGE_PER_HOUR = 20;

let isPresent = Math.floor(Math.random() * 3);

switch (isPresent) {
    case PRESENT:
        console.log("Employee is present");
        empHr = WORKING_HOUR;
        break;

    case PART_TIME:
        console.log("Employee is working part time");
        empHr = WORKING_HOUR / 2;
        break;

    default:
        console.log("Employee is absent");
        empHr = 0;
        break;
}

dailyWage = empHr * WAGE_PER_HOUR;

console.log("Employee Daily wage $" + dailyWage + " USD");