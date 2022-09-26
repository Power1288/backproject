import userModel, { IUser } from "../models/user.model"
import jwt from "jsonwebtoken"

export const login = async (email: string, password: string) => {
    const user = await userModel.findOne({email})
    
    if (!user) throw new Error("Une erreur est survenue")

    const same = user.verifyPassword(password)
    
    if (!same) throw new Error ("Mot de passe ou email invalide")

    const token = jwt.sign({id:user._id},'power',{expiresIn:"1h"})

    return {
        email:user.email,
        pseudo:user.pseudo,
        role:user.role,
        token
    }
}

export const register = async (email: string,password: string,pseudo: string) => {
    const user = await userModel.findOne({email})
    
    if (user) throw new Error("Email already exist")

    const newUser = await userModel.create({
        email,
        password,
        pseudo
    })

    return newUser
}