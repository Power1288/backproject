"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("../controllers/book.controller");
exports.booksRoute = express_1.default.Router();
exports.booksRoute.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, book_controller_1.getAllBooks)();
        res.status(200).send(books);
    }
    catch (e) {
        console.log(e);
    }
}));
exports.booksRoute.get("/author/:author", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { author } = req.params;
        const books = yield (0, book_controller_1.getBooksByAuthor)(author);
        res.status(200).send(books);
    }
    catch (e) {
        console.log(e);
    }
}));
exports.booksRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield (0, book_controller_1.getBookById)(id);
        res.status(200).send(book);
    }
    catch (e) {
        console.log(e);
    }
}));
exports.booksRoute.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, description, quantity, price, sales, choose } = req.body;
        const book = yield (0, book_controller_1.createBook)(title, author, description, quantity, price, sales, choose);
        res.status(200).send(book);
    }
    catch (e) {
        console.log(e);
    }
}));
exports.booksRoute.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, author, description, quantity, price, sales, choose } = req.body;
        const book = yield (0, book_controller_1.updateBook)(id, title, author, description, quantity, price, sales, choose);
        res.status(200).send(book);
    }
    catch (e) {
        console.log(e);
    }
}));
