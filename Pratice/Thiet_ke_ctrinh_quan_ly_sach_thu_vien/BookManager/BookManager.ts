import {Book} from "./Book";

export class BookManager {
    books: Book[] = [];
    constructor() {}
    add(book: Book) {
        this.books.push(book);
    }
    getList() {
        return this.books;
    }
    findBook(ID: string) {
        let i = -1;
        // this.books.forEach((ele: Book, index) => {
        //     if (ele.ID === ID) {
        //         i = index;
        //     }
        // })
        for (let j = 0; j < this.books.length; j++) {
            if (this.books[j].ID === ID) {
                i = j;
            }
        }
        return i;
    }
    delete(ID: string) {
        if (this.findBook(ID) !== -1) {
            this.books.splice(this.findBook(ID), 1);
        } else {
            throw new Error(`Cuon sach co ID: ${ID} khong nam trong danh sach quan ly`);
        }
    }
    update(ID: string, name: string) {
        if (this.findBook(ID) !== -1) {
            this.books[this.findBook(ID)].setName(name);
        } else {
            throw new Error(`Cuon sach co ID: ${ID} khong nam trong danh sach quan ly`);
        }
    }
}

