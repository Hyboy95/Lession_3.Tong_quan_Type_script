class Staff {
    name: string;
    email: string;
    age: number;
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    setName(name: string) {
        this.name = name;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setAge(age: number) {
        this.age = age;
    }
}

let staff = new Staff('A','A.gmail.com',19);
console.log(staff.getName());
console.log(staff.getEmail());
console.log(staff.getAge());
staff.setName('B');
staff.setEmail('B.gmail.com');
staff.setAge(20);
console.log(staff.getName());
console.log(staff.getEmail());
console.log(staff.getAge());
