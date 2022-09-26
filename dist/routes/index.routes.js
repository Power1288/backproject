"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./auth.route");
const book_route_1 = require("./book.route");
const user_route_1 = __importDefault(require("./user.route"));
const router = express_1.default.Router();
router.use("/books", book_route_1.booksRoute);
router.use("/auth", auth_route_1.authRoute);
router.use("/users", user_route_1.default);
exports.default = router;
