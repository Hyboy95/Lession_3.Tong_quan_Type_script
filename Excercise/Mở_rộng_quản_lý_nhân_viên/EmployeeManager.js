"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employees = [];
    }
    EmployeeManager.prototype.displayEmployeeList = function () {
        return this.employees;
    };
    EmployeeManager.prototype.displayInfoEmployee = function (employee) {
        console.log("Th\u00F4ng tin nh\u00E2n vi\u00EAn:");
        console.log("- T\u00EAn nh\u00E2n vi\u00EAn: ".concat(employee.fullName));
        console.log("- Gi\u1EDBi t\u00EDnh: ".concat(employee.gender));
        console.log("- Ng\u00E0y sinh: ".concat(employee.birthday));
        console.log("- Email: ".concat(employee.email));
        console.log(" S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: ".concat(employee.phoneNumber));
    };
    EmployeeManager.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    EmployeeManager.prototype.deleteEmployee = function (index) {
        if (index >= 0 && index < this.employees.length) {
            this.employees.splice(index, 1);
        }
        else {
            console.log("V\u1ECB tr\u00ED nh\u00E2n vi\u00EAn mu\u1ED1n x\u00F3a kh\u00F4ng h\u1EE3p l\u1EC7");
        }
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
