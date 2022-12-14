"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAutorization = void 0;
const user_model_1 = __importStar(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
const verifyAutorization = (req, res, next) => {
    const { token } = req.body.token ? req.body : req.headers;
    const { id } = jsonwebtoken_1.default.verify(token, "power");
    return user_model_1.default.findOne({ _id: id }).then(user => {
        if ((user === null || user === void 0 ? void 0 : user.role) == user_model_1.EUserRole.admin) {
            return next();
        }
        else {
            throw new Error("You dont have a permission");
        }
    });
};
exports.verifyAutorization = verifyAutorization;
