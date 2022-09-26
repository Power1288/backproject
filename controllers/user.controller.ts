import userModel from "../models/user.model"

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