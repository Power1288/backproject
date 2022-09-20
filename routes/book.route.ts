import express,{Request, Response, Router} from "express"
import { getAllBooks } from "../controllers/book.controller"

export const booksRoute:Router = express.Router()

booksRoute.get('/all',async (req: Request, res: Response) => {
    try {
        const books = await getAllBooks()
        res.status(200).send(books)
    }catch (e) {
        console.log(e);
    }
})

booksRoute.get("/:id",async (req:Request, res: Response) => {

})