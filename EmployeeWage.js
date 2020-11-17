let empCheck = 0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NO_OF_WORKING_DAYS=20;
let empHrs=0;

// To get daily working hours
function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

// UC 8 store hours and wages in map
// To get working hours of each day
let dailyWagesMap = new Map();
let dailyWorkingHoursMap = new Map();
const MAX_HRS_IN_MONTH=100;
let dailyEmpHours = 0;
let totalEmpHrs=0;
let totalWorkingDays=0;
let dailyWage = 0;
let totalWage = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS)
{
    totalWorkingDays++;

    // Get the working hours
    empCheck=Math.floor(Math.random()*10)%3;
    dailyEmpHours = GetWorkingHours(empCheck);

    // Store them in a map
    dailyWorkingHoursMap.set(totalWorkingDays,dailyEmpHours);

    // Get daily wage and store in map
    dailyWage = dailyEmpHours*WAGE_PER_HOUR;
    dailyWagesMap.set(totalWorkingDays,dailyWage);

    // Calculate total emp hours and total wage
    totalEmpHrs += dailyEmpHours;
    totalWage += dailyWage;
}
console.log("Total emp hrs : "+ totalEmpHrs);

// UC 9a
// Calculate total hours worked using map
let totalEmpHrsFromMap = Array.from(dailyWorkingHoursMap.values()).reduce(((totalEmphrs,dailyEmpHours)=>{totalEmphrs += dailyEmpHours; return totalEmphrs;}),0);
console.log("UC 9a Total emp hrs are : "+totalEmpHrsFromMap);

// Calculate total wage using map
let totalWageFromMap = Array.from(dailyWagesMap.values()).reduce(((totalWage,dailyWage)=>{return totalWage+dailyWage;}),0);
console.log("UC 9a Total emp wage are : "+totalWageFromMap);

// UC 9b 
// Show the full working days
let fullTimeWorkingDays = [...dailyWorkingHoursMap.keys()].filter(p => dailyWorkingHoursMap.get(p) == FULL_TIME_HOURS);
let partTimeWorkingDays = [...dailyWorkingHoursMap.keys()].filter(p => dailyWorkingHoursMap.get(p) == PART_TIME_HOURS);
let absentDays = [...dailyWorkingHoursMap.keys()].filter(p => dailyWorkingHoursMap.get(p) == 0);

console.log("9b Full time working days are : "+fullTimeWorkingDays);
console.log("9b part time working days are : "+partTimeWorkingDays);
console.log("9b absent days are : "+absentDays);