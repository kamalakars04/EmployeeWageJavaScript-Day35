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

// UC 10 Ability to store all in a single object
let empWageDetailsArray = [];
for(let dayNo=0;dayNo<NO_OF_WORKING_DAYS;dayNo++)
{
    empWageDetailsArray.push(
    {
        day : dayNo+1,
        wageEarned : (dailyWagesMap.get(dayNo+1)),
        hoursWorked : (dailyWorkingHoursMap.get(dayNo+1)),
        toString(){
            return '\nOn day '+this.day+' => Wage earned : '+this.wageEarned+' hours Worked : '+this.hoursWorked
        },
    });
}
console.log("\nUC 10 showing daily hours worked and wage using object "+empWageDetailsArray);

// UC 11
// Calculate total wage and total emp hours using object
let totalEmpHrsFromObject = empWageDetailsArray.reduce((totalHrs,details)=>{return totalHrs+details.hoursWorked;},0);

let totalWageFromObject = empWageDetailsArray.reduce((totalHrs,details)=>{return totalHrs+details.wageEarned;},0);

console.log("\n\nUC 11A Total Hours: " +totalEmpHrsFromObject+" Total Wage is : "+totalWageFromObject); 

// 11B show full time and part time seperately
console.log("\nUC 11B Logging Full Work Days");
empWageDetailsArray.filter(empWageDetailsArray => empWageDetailsArray.hoursWorked == FULL_TIME_HOURS) 
                .forEach(empWageDetailsArray =>console.log(empWageDetailsArray.toString())); 

// UC 11c shpw part time working hours
let partWorkingDayStrArr = empWageDetailsArray 
                .filter(empWageDetailsArray => empWageDetailsArray.hoursWorked == PART_TIME_HOURS) 
                .map(p => p); 

console.log("\nUC 11C PartWorkingDayStrings: "+ partWorkingDayStrArr); 

let nonWorkingDayNums = empWageDetailsArray 
                .filter(empWageDetailsArray => empWageDetailsArray.hoursWorked == 0) 
                .map(empWageDetailsArray => empWageDetailsArray.day); 

console.log("\nUC 11D NonWorkingDayNums: "+nonWorkingDayNums);

// Create employee payroll data object
class EmployeePayroll
{
    // Properties
    id;
    salary;

    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){return this._name;}
    set name(name){console.log("in set name"); this._name = name;}

    toString()
    {
        return "Id : "+this.id+" Name : "+this.name+" Salary : "+this.salary;
    }
} 

// Create instances of class
let employee = new EmployeePayroll(20,"Rao",50000);
console.log("id : "+employee.id+" name : "+employee.name);
console.log(employee.toString());