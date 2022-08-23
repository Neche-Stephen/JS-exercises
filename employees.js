let employees = [
    {
        Name : 'Ben Johnson',
        Role : 'CEO',
        startedService : 1988,
        numberOfServiceYears : () => ((new Date()).getFullYear()) - (employees[0].startedService)

    },

    {
        Name : 'Mark Anthony',
        Role : 'CTO',
        startedService : 1978,
        numberOfServiceYears : () => (new Date().getFullYear()) - employees[1].startedService

    }
];



const employeeCheck = (emp) => {
    for (let employee of employees){

        if (employee.Name == emp){
            details = ["Name: " + employee.Name, "Role: " + employee.Role, "Started Serivce on: " + employee.startedService, "Served for: " +employee.numberOfServiceYears() + " Years"];
            return details
        }
    }
    return emp + ' is not an employee!'
}

console.log(employeeCheck("Ben Johnson"))
console.log(employeeCheck("Ben Anthony"))



