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
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const admin_middleware_1 = require("../middlewares/admin.middleware");
const userRoute = express_1.default.Router();
userRoute.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_controller_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (e) {
        const { message } = e;
        res.status(400).json(message);
    }
}));
userRoute.delete("/:id", admin_middleware_1.verifyAutorization, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, user_controller_1.deleteUserById)(id);
        res.status(200).json(user);
    }
    catch (e) {
        const { messagge } = e;
        res.status(400).json(messagge);
    }
}));
exports.default = userRoute;
