import express,{Request, Response, Router} from "express"
import {createBook, getAllBooks, getBookById, getBooksByAuthor, updateBook} from "../controllers/book.controller"

export const booksRoute:Router = express.Router()

booksRoute.get('/all',async (req: Request, res: Response) => {
    try {
        const books = await getAllBooks()
        res.status(200).send(books)
    }catch (e) {
        console.log(e);
    }
})

booksRoute.get("/author/:author", async (req: Request, res: Response) => {
    try {
        const { author } = req.params
        const books = await getBooksByAuthor(author)
        res.status(200).send(books)
    }catch (e) {
        console.log(e)
    }
})

booksRoute.get("/:id",async (req: Request, res: Response) => {
    try {
        const { id } : any = req.params
        const book = await getBookById(id)
        res.status(200).send(book)
    }catch (e) {
        console.log(e)
    }
})

booksRoute.post("/create",async (req: Request,res: Response) => {
    try{
        const { title, author, description, quantity, price, sales, choose} = req.body
        const book = await createBook(title,author,description,quantity,price,sales,choose)
        res.status(200).send(book)
    }catch (e) {
        console.log(e)
    }
})

booksRoute.put("/:id",async (req: Request, res:Response) => {
    try{
        const { id } : any = req.params
        const { title, author, description, quantity, price, sales, choose} = req.body
        const book = await updateBook(id, title, author, description, quantity, price, sales, choose)
        res.status(200).send(book)
    }catch (e) {
        console.log(e)
    }
})