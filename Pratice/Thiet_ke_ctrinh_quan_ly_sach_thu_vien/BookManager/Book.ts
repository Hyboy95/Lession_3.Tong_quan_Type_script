export class Book {
    ID: string;
    name: string;
    constructor(ID: string, name: string) {
        this.ID = ID;
        this.name = name;
    }
    getID() {
        return this.ID;
    }
    getName() {
        return this.name;
    }
    setName(name:   string) {
        this.name = name;
    }
}