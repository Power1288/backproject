import bookModel from "../models/book.model"

export const getAllBooks = () => {
    return bookModel.find({}).then(books => {
        if (!books) throw new Error("Une erreur est survenue pendant les récuperation des livre")
        
        return books
    })
}