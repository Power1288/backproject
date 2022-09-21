import bookModel from "../models/book.model"

export const getAllBooks = () => {
    return bookModel.find({}).then(books => {
        if (!books) throw new Error("Une erreur est survenue pendant les récuperation des livre")
        return books
    })
}


export const getBookById = (id: number) => {
    return bookModel.findOne({_id:id}).then(book => {
        if (!book) throw new Error("Votre livre es introuvable")
        return book
    })
}

export const getBooksByAuthor = (author: string) => {
    return bookModel.find({author}).then(books => {
        if (!books) throw new Error("Il semblerai que votre autheur soie innexistant")
        return books
    })
}