var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff('A', 'A.gmail.com', 19);
console.log(staff.getName());
console.log(staff.getEmail());
console.log(staff.getAge());
staff.setName('B');
staff.setEmail('B.gmail.com');
staff.setAge(20);
console.log(staff.getName());
console.log(staff.getEmail());
console.log(staff.getAge());
