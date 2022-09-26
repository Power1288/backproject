import mongoose, { Schema } from "mongoose";


interface IBook {
    title:string,
    author:string,
    description:string,
    quantity:number,
    price:number,
    sales:boolean,
    choose:boolean,
    imageName:string
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
    price: {
        type:Number,
        nullable:false,
        default:5.5
    },
    sales: {
        type:Boolean,
        nullable:false,
        default:false
    },
    choose: {
        type: Boolean,
        nullable:false,
        default:false
    },
    imageName: {
        type:String,
        nullable:true,
    }
})

export default mongoose.model("Book",bookSchema)