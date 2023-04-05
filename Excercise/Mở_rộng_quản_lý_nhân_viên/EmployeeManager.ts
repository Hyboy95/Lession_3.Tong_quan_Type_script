import {Employee} from "./Employee";

export class EmployeeManager {
    employees: Employee[] = [];

    constructor() {
    }

    displayEmployeeList(): Employee[] {
        return this.employees;
    }

    displayInfoEmployee(employee: Employee) {
        console.log(`Thông tin nhân viên:`);
        console.log(`- Tên nhân viên: ${employee.fullName}`);
        console.log(`- Giới tính: ${employee.gender}`);
        console.log(`- Ngày sinh: ${employee.birthday}`);
        console.log(`- Email: ${employee.email}`);
        console.log(` Số điện thoại: ${employee.phoneNumber}`)
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    deleteEmployee(index: number) {
        if (index >= 0 && index < this.employees.length) {
            this.employees.splice(index, 1);
        } else {
            console.log(`Vị trí nhân viên muốn xóa không hợp lệ`)
        }
    }

    // findEmployee(email: string) {
    //     let index = -1;
    //     for (let i = 0; i < this.employees.length; i++) {
    //         if (this.employees[i].email === email) {
    //             index = i;
    //         }
    //     }
    //     return index;
    // }
    //
    // deleteEmployee(email: string) {
    //     if (this.findEmployee(email) !== -1) {
    //         this.employees.splice(this.findEmployee(email), 1);
    //     } else {
    //         console.log(`Không nhân viên nào có email: ${email}`)
    //     }
    // }
}