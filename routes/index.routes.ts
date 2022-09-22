import express,{Router} from "express";
import { userRoute } from "./auth.route";
import { booksRoute } from "./book.route";

const router : Router = express.Router()


router.use("/books",booksRoute)
router.use("/auth",userRoute)



export default router;