import { NextFunction, Request, Response } from "express"
import userModel, { EUserRole } from "../models/user.model"
import  jwt  from "jsonwebtoken"


/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const verifyAutorization = (req:Request, res: Response, next: NextFunction) => {
    const {token} = req.body.token ? req.body : req.headers

    const {id} : any = jwt.verify(token,"power")

    return userModel.findOne({_id:id}).then(user => {

        if (user?.role == EUserRole.admin) {
            return next()
        }else {
            throw new Error("You dont have a permission");
            
        }
    })


}