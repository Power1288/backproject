import express,{Router} from "express";
import { booksRoute } from "./book.route";

const router : Router = express.Router()


router.use("/books",booksRoute)



export default router;