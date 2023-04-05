"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var book1 = new Book_1.Book('7 vien ngoc rong', 'unknown', true);
var book2 = new Book_1.Book('coi xay gio', 'anonymous', false);
var book3 = new Book_1.Book('omomatic', 'Hieu Truong', false);
var bookList = [];
bookList.push(book1, book2, book3);
bookList.forEach(function (ele) {
    if (ele.alreadyRead) {
        console.log("Quy\u1EC3n s\u00E1ch c\u00F3 t\u00EAn ".concat(ele.title, " \u0111\u01B0\u1EE3c vi\u1EBFt b\u1EDFi t\u00E1c gi\u1EA3 ").concat(ele.author, " \u0111\u00E3 \u0111\u01B0\u1EE3c \u0111\u1ECDc"));
    }
    else
        console.log("Quy\u1EC3n s\u00E1ch c\u00F3 t\u00EAn ".concat(ele.title, " \u0111\u01B0\u1EE3c vi\u1EBFt b\u1EDFi t\u00E1c gi\u1EA3 ").concat(ele.author, " ch\u01B0a \u0111\u01B0\u1EE3c \u0111\u1ECDc"));
});
// function findBook(book: Book[]) {
//     for (let i = 0; i < book.length; i++) {
//         if (book[i].alreadyRead) {
//             console.log('ok')
//         } else {
//             console.log('?')
//         }
//     }
// }
// findBook(bookList);
