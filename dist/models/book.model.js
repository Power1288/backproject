"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        unique: true,
        nullable: false
    },
    author: {
        type: String,
        nullable: false
    },
    description: {
        type: String,
        nullable: true
    },
    quantity: {
        type: Number,
        nullable: false,
        default: 1
    },
    price: {
        type: Number,
        nullable: false,
        default: 5.5
    },
    sales: {
        type: Boolean,
        nullable: false,
        default: false
    },
    choose: {
        type: Boolean,
        nullable: false,
        default: false
    },
    imageName: {
        type: String,
        nullable: true,
    }
});
exports.default = mongoose_1.default.model("Book", bookSchema);
