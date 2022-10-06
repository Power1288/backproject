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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRoleById = exports.getUserById = exports.deleteUserById = exports.getAllUsers = void 0;
const user_model_1 = __importStar(require("../models/user.model"));
/**
 *
 * @returns allUsers
 */
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
/**
 * this function delete an user by id
 *
 * @param userId
 * @returns
 */
const deleteUserById = (userId) => {
    return user_model_1.default.findOne({ _id: userId }).then(user => {
        if (!user) {
            throw new Error("User unvailable");
        }
        user.delete();
    });
};
exports.deleteUserById = deleteUserById;
/**
 *
 * @param userId
 * @returns
 */
const getUserById = (userId) => {
    return user_model_1.default.findOne({ _id: userId }).then(user => {
        if (!user)
            throw new Error("User unvalable");
        return {
            _id: user._id,
            email: user.email,
            pseudo: user.pseudo,
            role: user.role
        };
    });
};
exports.getUserById = getUserById;
const updateUserRoleById = (userId, role) => {
    console.log(role);
    return user_model_1.default.findOne({ _id: userId }).then(user => {
        if (!user)
            throw new Error('user unvailable');
        user.role = role == user_model_1.EUserRole.user ? user_model_1.EUserRole.admin : user_model_1.EUserRole.user;
        user.save();
    });
};
exports.updateUserRoleById = updateUserRoleById;
