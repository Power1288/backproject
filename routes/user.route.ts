import express, {Request, Response, Router} from "express"
import { deleteUserById, getAllUsers } from "../controllers/user.controller";
import { verifyAutorization } from "../middlewares/admin.middleware";


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

userRoute.delete("/:id",verifyAutorization,async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await deleteUserById(id)
        res.status(200).json(user)
    } catch (e:any) {
        const { messagge } = e
        res.status(400).json(messagge)
    }
})

















export default userRoute;