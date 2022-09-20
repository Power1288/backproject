import express from "express"
import mongoose from "mongoose";
import { factorieBookCreate } from "./factories/book.factories";

import router from "./routes/index.routes";

const app = express();


mongoose.connect("mongodb://localhost:27017/project",() => {
    console.log("server database established");
    
})

app.listen(3000, () => {
    console.log("Server has been started on port 3000");
})

app.use("/",router)

