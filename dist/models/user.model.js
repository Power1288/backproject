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
exports.EUserRole = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
var EUserRole;
(function (EUserRole) {
    EUserRole["user"] = "user";
    EUserRole["admin"] = "admin";
})(EUserRole = exports.EUserRole || (exports.EUserRole = {}));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        nullable: false,
        unique: true
    },
    password: {
        type: String,
        nullable: false
    },
    pseudo: {
        type: String,
        nullable: false,
    },
    role: {
        type: String,
        enum: EUserRole,
        default: EUserRole.user
    }
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordHash = yield bcrypt_1.default.hash(this.password, 10);
        this.password = passwordHash;
        next();
    });
});
userSchema.methods.verifyPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const same = yield bcrypt_1.default.compare(password, this.password);
        return same;
    });
};
exports.default = mongoose_1.default.model("User", userSchema);
