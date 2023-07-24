import User from "../models/UserModel.js"

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll()
        // const hello = "hello"
        // res.status(200).json(hello)
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getUsersById = async (req, res) => {
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


export const createUser = async (req, res) => {
    try {
        // const { name, email, gender } = req.body;

        // // Cek apakah email sudah ada di basis data
        // const existingUser = await User.findOne({ where: { email } });
        // if (existingUser) {
        //     return res.status(400).json({ error: "Email sudah dipakai" });
        // }

        const isEmailExist = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(isEmailExist) {
            return res.status(400).json({
                "message": "email sudah dipakai"
            })
        }

        // Jika email unik, tambahkan pengguna baru ke basis data
        await User.create(req.body);

        res.status(201).json({
            message: "User created",
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// export const createUser = async(req, res) => {
//     try {

//         await User.create(req.body)

//         res.status(201).json({
//             massage: "user created"
//         })
//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const updateUser = async (req, res) => {
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

export const deleteUser = async (req, res) => {
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