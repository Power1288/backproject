"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.createBook = exports.getBooksByAuthor = exports.getBookById = exports.getAllBooks = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
/**
 *
 * this function getAllBooks
 *
 * @returns books
 */
const getAllBooks = () => {
    return book_model_1.default.find({}).then(books => {
        if (!books)
            throw new Error("Une erreur est survenue pendant les récuperation des livre");
        return books;
    });
};
exports.getAllBooks = getAllBooks;
/**
 *
 * @param id if of book search
 */
const getBookById = (id) => {
    return book_model_1.default.findOne({ _id: id }).then(book => {
        if (!book)
            throw new Error("Votre livre es introuvable");
        return book;
    });
};
exports.getBookById = getBookById;
/**
 *
 * @param author name for the books search
 */
const getBooksByAuthor = (author) => {
    return book_model_1.default.find({ author }).then(books => {
        if (!books)
            throw new Error("Il semblerai que votre autheur soie innexistant");
        return books;
    });
};
exports.getBooksByAuthor = getBooksByAuthor;
/**
 *
 * @param title
 * @param author
 * @param description
 * @param quantity
 * @param price
 * @param sales
 * @param choose
 */
const createBook = (title, author, description, quantity, price, sales, choose) => {
    return book_model_1.default.create({
        title,
        author,
        description,
        quantity,
        price,
        sales,
        choose
    }).then(book => {
        if (!book)
            throw new Error("Une erreur est survenue pendant la creation");
        return book;
    });
};
exports.createBook = createBook;
/**
 *
 * @param id
 * @param title
 * @param author
 * @param description
 * @param quantity
 * @param price
 * @param sales
 * @param choose
 * @returns
 */
const updateBook = (id, title, author, description, quantity, price, sales, choose) => {
    return book_model_1.default.findOneAndUpdate({ _id: id }, {
        title,
        author,
        description,
        quantity,
        price,
        sales,
        choose
    }).then(book => {
        if (!book)
            throw new Error("Une erreur est survenue pendant la mise a jour");
        return book;
    });
};
exports.updateBook = updateBook;
