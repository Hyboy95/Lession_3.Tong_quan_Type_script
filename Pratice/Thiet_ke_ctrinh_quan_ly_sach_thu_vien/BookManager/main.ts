import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book1 = new Book('1','name_1');
let book2 = new Book('2','name_2');
let book3 = new Book('3','name_3');
let book4 = new Book('4','name_4');

let bookManager = new BookManager;

bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.add(book4);
console.log(bookManager.getList());
bookManager.update('4', 'Hieu Truong');
console.log(bookManager.getList());
bookManager.delete('4');
console.log(bookManager.getList());