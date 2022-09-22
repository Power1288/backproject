import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

export enum EUserRole {
    user = "user",
    admin = "admin"
}

export interface IUser {
    email:string,
    password:string,
    pseudo:string,
    role:EUserRole,
    verifyPassword : (password: string) => boolean
}

const userSchema: Schema<IUser> = new mongoose.Schema<IUser>({
    email: {
        type:String,
        nullable:false,
        unique:true
    },
    password: {
        type:String,
        nullable:false
    },
    pseudo: {
        type: String,
        nullable:false,
    },
    role: {
        type:String,
        enum:EUserRole,
        default:EUserRole.user
    }
})

userSchema.pre("save",async function (next) {
    const passwordHash = await bcrypt.hash(this.password,10)
    this.password = passwordHash
    next()
})

userSchema.methods.verifyPassword = async function (password: string) : Promise<boolean> {
    const same : boolean = await bcrypt.compare(password,this.password)
    return same
}

export default mongoose.model("User",userSchema)

