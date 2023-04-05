enum Gender {
    FEMALE,
    MAlE,
    OTHER
}

class Employee {
    fullName: string;
    gender: Gender;
    birthday: Date;
    email: string;
    phoneNumber?: string;
    constructor(fullName: string, gender: Gender, birthday: Date,email: string, phoneNumber?: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

let employeeList: Employee[] = [];
employeeList.push(new Employee('Truong Ngoc Hieu', Gender.FEMALE, new Date('05-11-1996'),'hieutn@gmail.com', '0984598314'));
employeeList.push(new Employee('Truong Hieu Ngoc', Gender.MAlE, new Date('10-11-1998'),'ngoctn@gmail.com', '0944337314'));
employeeList.push(new Employee('Hieu Ngoc Truong', Gender.OTHER, new Date('01-11-1998'),'lalatn@gmail.com', '0944347314'));

function showEmployee(employee: Employee) {
    console.log(employee);
}

employeeList.forEach(showEmployee);