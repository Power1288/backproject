"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorieBookCreate = void 0;
const faker_1 = require("@faker-js/faker");
const book_model_1 = __importDefault(require("../models/book.model"));
/**
 * generate an factice book
 */
const factorieBookCreate = () => {
    for (let i = 0; i < 10; i++) {
        book_model_1.default.create({
            title: faker_1.faker.lorem.lines(1),
            author: faker_1.faker.name.firstName(),
            description: faker_1.faker.lorem.lines(3)
        }).then(() => {
        }).catch(e => console.log(e));
    }
    console.log("Book factories load");
};
exports.factorieBookCreate = factorieBookCreate;
