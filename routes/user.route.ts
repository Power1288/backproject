import express, {Request, Response, Router} from "express"
import { getAllUsers } from "../controllers/user.controller";


const userRoute: Router = express.Router()

userRoute.get("/all",async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        res.status(200).json(users)
    }catch(e: any) {
        const { message } = e
        res.status(400).json(message)
    }
})

















export default userRoute;