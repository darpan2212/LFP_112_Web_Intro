class EmployeePayroll{

    id;
    salary;

    get name() {return this._name;}
    set name(name) {
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name)) {
            this._name=name;
        } else {
            throw "Name is incorrect";
        }
    }

    constructor(id,name,salary) {
        this.id=id;
        this.salary=salary;
        this.name=name;
    }

    toString() {
        return 'Emp name : '+this.name+'\nEmp id : '+this.id+'\nEmp salary :'+this.salary;
    }
}

let empPayrollobj = new EmployeePayroll(1,"Mark",100000);

console.log(empPayrollobj.id+"\t"+empPayrollobj.name+"\t"+empPayrollobj.salary);
try {
    empPayrollobj.name="john";
} catch(e){
    console.log(e);
}

console.log(empPayrollobj.id+"\t"+empPayrollobj.name+"\t"+empPayrollobj.salary);