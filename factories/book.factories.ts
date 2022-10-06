import { faker } from '@faker-js/faker';
import bookModel from '../models/book.model';


/**
 * generate an factice book
 */
export const factorieBookCreate = () => {
    for (let i = 0; i < 10; i++) {
        bookModel.create({
            title: faker.lorem.lines(1),
            author: faker.name.firstName(),
            description: faker.lorem.lines(3)
        }).then(() => {
            
        }).catch(e => console.log(e))
    }
    console.log("Book factories load");
   
    
}