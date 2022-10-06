import bookModel from "../models/book.model"


/** 
 * 
 * this function getAllBooks
 * 
 * @returns books
 */
export const getAllBooks = () => {
    return bookModel.find({}).then(books => {
        if (!books) throw new Error("Une erreur est survenue pendant les récuperation des livre")
        return books
    })
}

/**
 *
 * @param id if of book search
 */
export const getBookById = (id: number) => {
    return bookModel.findOne({_id: id}).then(book => {
        if (!book) throw new Error("Votre livre es introuvable")
        return book
    })
}

/**
 *
 * @param author name for the books search
 */
export const getBooksByAuthor = (author: string) => {
    return bookModel.find({author}).then(books => {
        if (!books) throw new Error("Il semblerai que votre autheur soie innexistant")
        return books
    })
}

/**
 *
 * @param title
 * @param author
 * @param description
 * @param quantity
 * @param price
 * @param sales
 * @param choose
 */
export const createBook = (title: string, author: string, description: string, quantity: string, price: number, sales: boolean, choose: boolean) => {
    return bookModel.create({
        title,
        author,
        description,
        quantity,
        price,
        sales,
        choose
    }).then(book => {
        if (!book) throw new Error("Une erreur est survenue pendant la creation")
        return book
    })
}


/**
 * 
 * @param id 
 * @param title 
 * @param author 
 * @param description 
 * @param quantity 
 * @param price 
 * @param sales 
 * @param choose 
 * @returns 
 */
export const updateBook = (id:number,title: string, author: string, description: string, quantity: string, price: number, sales: boolean, choose: boolean) => {
    return bookModel.findOneAndUpdate({_id:id},{
        title,
        author,
        description,
        quantity,
        price,
        sales,
        choose
    }).then(book => {
        if (!book) throw new Error("Une erreur est survenue pendant la mise a jour")
        return book
    })
}