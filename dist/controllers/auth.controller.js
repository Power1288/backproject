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
exports.register = exports.login = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * this function as a login user
 *
 * @param email
 * @param password
 * @returns
 */
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email });
    if (!user)
        throw new Error("Une erreur est survenue");
    const same = user.verifyPassword(password);
    if (!same)
        throw new Error("Mot de passe ou email invalide");
    const token = jsonwebtoken_1.default.sign({ id: user._id }, 'power', { expiresIn: "1h" });
    return {
        email: user.email,
        pseudo: user.pseudo,
        role: user.role,
        token
    };
});
exports.login = login;
/**
 * this function as a register user
 *
 * @param email
 * @param password
 * @param pseudo
 * @returns
 */
const register = (email, password, pseudo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email });
    if (user)
        throw new Error("Email already exist");
    const newUser = yield user_model_1.default.create({
        email,
        password,
        pseudo
    });
    return newUser;
});
exports.register = register;
