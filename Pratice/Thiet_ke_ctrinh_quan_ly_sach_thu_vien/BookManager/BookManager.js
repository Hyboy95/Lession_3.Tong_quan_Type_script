"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBook = function (ID) {
        var i = -1;
        // this.books.forEach((ele: Book, index) => {
        //     if (ele.ID === ID) {
        //         i = index;
        //     }
        // })
        for (var j = 0; j < this.books.length; j++) {
            if (this.books[j].ID === ID) {
                i = j;
            }
        }
        return i;
    };
    BookManager.prototype.delete = function (ID) {
        if (this.findBook(ID) !== -1) {
            this.books.splice(this.findBook(ID), 1);
        }
        else {
            throw new Error("Cuon sach co ID: ".concat(ID, " khong nam trong danh sach quan ly"));
        }
    };
    BookManager.prototype.update = function (ID, name) {
        if (this.findBook(ID) !== -1) {
            this.books[this.findBook(ID)].setName(name);
        }
        else {
            throw new Error("Cuon sach co ID: ".concat(ID, " khong nam trong danh sach quan ly"));
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
