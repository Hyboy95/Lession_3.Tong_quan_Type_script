var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 0] = "FEMALE";
    Gender[Gender["MAlE"] = 1] = "MAlE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthday, email, phoneNumber) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee('Truong Ngoc Hieu', Gender.FEMALE, new Date('05-11-1996'), 'hieutn@gmail.com', '0984598314'));
employeeList.push(new Employee('Truong Hieu Ngoc', Gender.MAlE, new Date('10-11-1998'), 'ngoctn@gmail.com', '0944337314'));
employeeList.push(new Employee('Hieu Ngoc Truong', Gender.OTHER, new Date('01-11-1998'), 'lalatn@gmail.com', '0944347314'));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
