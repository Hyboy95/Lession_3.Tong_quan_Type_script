import {Employee, Gender} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let manager = new EmployeeManager();
let employee_1 = new Employee ('Cao Minh Toan', Gender.MALE, new Date('11-02-1998'), 'toan@gmail.com','0984333211');
let employee_2 = new Employee ('Toan Minh Cao', Gender.FEMALE, new Date('10-15-1998'), 'toan_1@gmail.com','0914345234');
let employee_3 = new Employee ('Cao Toan Minh', Gender.OTHER, new Date('09-02-1998'), 'toan_2@gmail.com','09124333256');

manager.addEmployee(employee_1);
manager.addEmployee(employee_2);
manager.addEmployee(employee_3);
console.log(manager.displayEmployeeList());
manager.displayInfoEmployee(employee_1);
manager.deleteEmployee(2);
console.log(manager.displayEmployeeList());