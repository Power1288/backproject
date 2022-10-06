import userModel, { EUserRole } from "../models/user.model"


/**
 * 
 * @returns allUsers
 */
export const getAllUsers = () => {

    const usersList : any = []
    return userModel.find({}).then(users => {
        if (!users) throw new Error("Aucun utilisateur de trouvé")

        for (const user of users) {
            const actualUser = {
                id: user._id,
                email: user.email,
                pseudo: user.pseudo,
                role: user.role
            }
            usersList.push(actualUser)
        }
        return usersList
    })
}

/**
 * this function delete an user by id
 * 
 * @param userId 
 * @returns
 */
export const deleteUserById = (userId: string) => {
   return userModel.findOne({_id:userId}).then(user => {
        if (!user) {
           throw new Error("User unvailable");
        }
        user.delete()
    })
}

/**
 * 
 * @param userId 
 * @returns 
 */
export const getUserById = (userId : string) => {
    return userModel.findOne({_id : userId}).then(user => {
        if (!user) throw new Error("User unvalable");
        
        return {
            _id : user._id,
            email: user.email,
            pseudo: user.pseudo,
            role: user.role
        }
    })
}

export const updateUserRoleById = (userId : string,role : string) => {
    console.log(role);
    
    return userModel.findOne({_id : userId}).then(user => {
        if (!user) throw new Error('user unvailable')
        user.role = role == EUserRole.user ? EUserRole.admin : EUserRole.user
        user.save()
    })
}