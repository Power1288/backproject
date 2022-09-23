import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"

import router from "./routes/index.routes";

const app = express();

app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/project",() => {
    console.log("server database established");
})

app.listen(3000, () => {
    console.log("Server has been started on port 3000");
})

app.use("/",router)

