import User from "../models/UserModel.js"

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll()
        // const hello = "hello"
        // res.status(200).json(hello)
        
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getUsersById = async(req, res) => {
    try {
        const respose = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(respose)
    } catch (error) {
        console.log(error.massage)
    }
}

export const createUser = async(req, res) => {
    try {
        console.log("data lewat 1");
        await User.create(req.body)
        console.log("data lewat 2");
        res.status(201).json({
            massage: "user created"
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            massage: "user updated"
        })
    } catch (error) {
        console.log(error.massage)
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            massage: "user deleted"
        })
    } catch (error) {
        console.log(error.massage)
    }
}