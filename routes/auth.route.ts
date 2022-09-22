import express, {Request, Response, Router} from "express"
import { login, register } from "../controllers/user.controller"

export const userRoute: Router = express.Router()

userRoute.post('/login',async (req: Request,res: Response) => {
    try {
        const { email , password } = req.body

        const user = await login(email, password)
        res.status(200).send(user)
    }catch(e) {
        console.log(e);
        
    }
})

userRoute.post('/register',async (req:Request,res: Response) => {
    try {
        const { email, password, pseudo} = req.body
        const user = await register(email,password,pseudo)
        res.status(200).send(user)
    }catch (e) {
        console.log(e);
        
    }
})