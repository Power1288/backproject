import express, {Request, Response, Router} from "express"
import { login, register } from "../controllers/auth.controller"

export const authRoute: Router = express.Router()

authRoute.post('/login',async (req: Request,res: Response) => {
    try {
        const { email , password } = req.body

        const user = await login(email, password)
        res.status(200).send(user)
    }catch(e:any) {
        const { message } = e
        res.status(400).send(message)
        
    }
})

authRoute.post('/register',async (req: Request,res: Response) => {
    try {
        const { email, password, pseudo } = req.body
        const user = await register(email,password,pseudo)
        res.status(200).send(user)
    }catch (e:any) {
        const {message} = e
        res.status(400).send(message)
    }
})