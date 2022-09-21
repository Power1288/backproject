"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/project", () => {
    console.log("server database established");
});
app.listen(3000, () => {
    console.log("Server has been started on port 3000");
});
app.use("/", index_routes_1.default);
