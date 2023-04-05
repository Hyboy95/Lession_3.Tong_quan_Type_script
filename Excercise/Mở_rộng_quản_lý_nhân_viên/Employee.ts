export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

export class Employee {
    fullName: string;
    gender: Gender;
    birthday: Date;
    email: string;
    phoneNumber?: string;
    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}