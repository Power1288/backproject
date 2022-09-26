import express,{Router} from "express";
import { authRoute } from "./auth.route";
import { booksRoute } from "./book.route";
import userRoute from "./user.route";

const router : Router = express.Router()


router.use("/books",booksRoute)
router.use("/auth",authRoute)
router.use("/users",userRoute)


export default router;