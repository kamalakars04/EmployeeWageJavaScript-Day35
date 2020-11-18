// UC 11 Create employee payroll data object
// UC 12 Extend payroll object
class EmployeePayroll
{
    // Properties
    id;
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){return this._name;}
    set name(name){console.log("in set name"); this._name = name;}

    toString()
    {
        const options = {year:'numeric', month:'long',date:'numeric'}
        const empDate = this.startDate === undefined?"undefined":this.startDate.toLocaleDateString();
        return "Id : "+this.id+" Name : "+this.name+" Salary : "+this.salary+" Gender : "+this.gender+" StartDate : "+empDate;
    }
} 

// Create instances of class
let employee = new EmployeePayroll(20,"Rao",50000,'M',new Date());
console.log("id : "+employee.id+" name : "+employee.name);
console.log(employee.toString());