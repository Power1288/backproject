import mongoose, { Schema } from "mongoose";


interface IBook {
    title:string,
    author:string,
    description:string,
    quantity:number,
    choose:boolean
}

const bookSchema: Schema<IBook> = new mongoose.Schema<IBook>({
    title : {
        type: String,
        unique: true,
        nullable: false
    },
    author: {
        type: String,
        nullable:false
    },
    description: {
        type: String,
        nullable: true
    },
    quantity: {
        type:Number,
        nullable:false,
        default:1
    },
    choose: {
        type: Boolean,
        nullable:false,
        default:false
    }
})

export default mongoose.model("Book",bookSchema)