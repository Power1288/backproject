"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = () => {
    const usersList = [];
    return user_model_1.default.find({}).then(users => {
        if (!users)
            throw new Error("Aucun utilisateur de trouvé");
        for (const user of users) {
            const actualUser = {
                id: user._id,
                email: user.email,
                pseudo: user.pseudo,
                role: user.role
            };
            usersList.push(actualUser);
        }
        return usersList;
    });
};
exports.getAllUsers = getAllUsers;
