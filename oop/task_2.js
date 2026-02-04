`
В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати 
властивості та методи класу Book. Додайте до класу EBook нову властивість, 
наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась 
вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. 
Використовуйте їх для зміни та отримання значень властивостей.

Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу 
Book і формат файлу як рядок ****та повертати екземпляр класу EBook
`
import { Book } from './task_1.js';


class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const allowed = ['pdf', 'epub'];
        if (!allowed.includes(value)) {
            throw new Error('Invalid file format');
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Book title: ${this.title}, book author: ${this.author}, book year: ${this.year}, file format ${this.fileFormat}`);
    }

    static makeEbook(book, format) {
        let newEbook = new EBook(book.title, book.author, book.year, format);
        return newEbook;
    }

}

// ===== Example of usage creation of class instances =====
// let ebook_1 = new EBook('Title 3', 'Author 3', 'Year 3', 'pdf');
// ebook_1.printInfo();
// console.log(ebook_1.author);

// ===== Example of usage static method getOldestBook =====
// const book1 = new Book('Title 1', 'Author 1', 2010);
// const book2 = new Book('Title 2', 'Author 2', 2005);
// const ebook1 = new EBook('Title 3', 'Author 3', 2018, 'pdf');
// const books = [book1, book2, ebook1];
// const oldest = Book.getOldestBook(books);
// oldest.printInfo();

// ===== Example of usage static method makeEbook =====
// const newBook = EBook.makeEbook(book1, 'pdf');
// console.log(newBook);