import {Book} from "./Book";

let book1 = new Book('7 vien ngoc rong', 'unknown', true);
let book2 = new Book('coi xay gio', 'anonymous', false);
let book3 = new Book('omomatic', 'Hieu Truong', false);

let bookList: Book[] = [];
bookList.push(book1, book2, book3);
bookList.forEach(ele => {
    if (ele.alreadyRead) {
        console.log(`Quyển sách có tên ${ele.title} được viết bởi tác giả ${ele.author} đã được đọc`);
    } else
        console.log(`Quyển sách có tên ${ele.title} được viết bởi tác giả ${ele.author} chưa được đọc`);
})

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
