"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
const getAllBooks = () => {
    return book_model_1.default.find({}).then(books => {
        if (!books)
            throw new Error("Une erreur est survenue pendant les récuperation des livre");
        console.log(books);
        return books;
    });
};
exports.getAllBooks = getAllBooks;
