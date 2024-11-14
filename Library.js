class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.status = 'доступна'; //начальный статус книги
    }
}

class Library {
    constructor() {
        this.books = []; //массив для хранения книг
    }

    //функция добавления книги
    addBook(book) {
        this.books.push(book);
    }

    //функция для взятия книги
    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            if (book.status === "доступна") {
                book.status = "взята";
                console.log(`Книга "${book.title}" взята.`);
            } else {
                console.log(`Книги "${book.title}" нет.`);
            }
        } else {
            console.log("Книга с таким ISBN не найдена.");
        }
    }

    //функция для возврата книги
    returnBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            if (book.status === "взята") {
                book.status = "доступна";
                console.log(`Книга "${book.title}" возвращена.`);
            } else {
                console.log(`Книга "${book.title}" доступна.`);
            }
        } else {
            console.log("Книга с таким ISBN не найдена.");
        }
    }

    //функция для просмотра доступных книг
    listAvailableBooks() {
        const availableBooks = this.books.filter(b => b.status === "доступна");
        if (availableBooks.length === 0) {
            console.log("Нет доступных книг.");
        } else {
            console.log("Доступные книги:");
            availableBooks.forEach(b => {
                console.log(`- ${b.title} (${b.author}, ISBN: ${b.isbn})`);
            });
        }
    }
}

const library = new Library();

const book1 = new Book("Война и мир", "Лев Толстой", "1");
const book2 = new Book("Преступление и наказание", "Федор Достоевский", "2");
const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", "4");

library.listAvailableBooks(); // список доступных книг

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listAvailableBooks(); // список доступных книг
library.borrowBook("1");   // взять книгу по ISBN
library.borrowBook("1");   // попытка повторно взять ту же книгу
library.borrowBook("3");   // попытка взять книгу c несуществующим ISNB
library.listAvailableBooks();  // обновленный список доступных книг

library.returnBook("1");   // вернуть книгу по ISBN
library.returnBook("1");   // попытка повторно вернуть книгу по ISBN
library.listAvailableBooks();  // список доступных книг после возврата