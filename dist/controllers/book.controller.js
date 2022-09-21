"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksByAuthor = exports.getBookById = exports.getAllBooks = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
const getAllBooks = () => {
    return book_model_1.default.find({}).then(books => {
        if (!books)
            throw new Error("Une erreur est survenue pendant les récuperation des livre");
        return books;
    });
};
exports.getAllBooks = getAllBooks;
const getBookById = (id) => {
    return book_model_1.default.findOne({ _id: id }).then(book => {
        if (!book)
            throw new Error("Votre livre es introuvable");
        return book;
    });
};
exports.getBookById = getBookById;
const getBooksByAuthor = (author) => {
    return book_model_1.default.find({ author }).then(books => {
        if (!books)
            throw new Error("Il semblerai que votre autheur soie innexistant");
        return books;
    });
};
exports.getBooksByAuthor = getBooksByAuthor;
