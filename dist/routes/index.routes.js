"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("./book.route");
const router = express_1.default.Router();
router.use("/books", book_route_1.booksRoute);
exports.default = router;
