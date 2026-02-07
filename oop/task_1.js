`
Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. 
Використовуйте їх для зміни та отримання значень властивостей.


Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) 
книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши 
масив книг (серед них мають бути екземляри обох класів Book та EBook)

`

export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== 'string') {
            throw new Error('Title must be a string');
        }
        this._title = value;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error('Title must be a string');
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Year must be a positive number');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Book title: ${this.title}, book author: ${this.author}, book year: ${this.year}`);
    }

    static getOldestBook(books) {
        let oldestBook = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }

        return oldestBook;
    }
}

let book1 = new Book('title_1', 'author_1', 1000);
let book2 = new Book('title_2', 'author_2', 1080);
let book3 = new Book('title_3', 'author_3', 1900);

// ===== Example of usage method printInfo =====
// book1.printInfo();
// book2.printInfo();
// book3.printInfo();
//test

